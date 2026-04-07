use soroban_sdk::{contract, contractimpl, Address, BytesN, Env, String};

use crate::errors::TrisigError;
use crate::storage_types::{DataKey, Group};

#[contract]
pub struct TrisigContract;

#[contractimpl]
impl TrisigContract {
    /// Initialize the contract with an admin address.
    pub fn initialize(env: Env, admin: Address) -> Result<(), TrisigError> {
        if env.storage().instance().has(&DataKey::Admin) {
            return Err(TrisigError::AlreadyInitialized);
        }
        env.storage().instance().set(&DataKey::Admin, &admin);
        Ok(())
    }

    /// Create a new group treasury.
    /// The caller becomes the group admin.
    /// `threshold` is the min number of member approvals required to spend.
    pub fn create_group(
        env: Env,
        caller: Address,
        id: BytesN<32>,
        name: String,
        threshold: u32,
    ) -> Result<Group, TrisigError> {
        caller.require_auth();

        if env.storage().persistent().has(&DataKey::Group(id.clone())) {
            return Err(TrisigError::AlreadyMember); // group id already exists
        }

        let group = Group {
            id: id.clone(),
            name,
            admin: caller.clone(),
            balance: 0,
            threshold,
            member_count: 1,
        };

        env.storage().persistent().set(&DataKey::Group(id.clone()), &group);
        // Mark admin as a member
        env.storage().persistent().set(&DataKey::Member(id, caller), &true);

        Ok(group)
    }

    /// Add a member to an existing group. Only the group admin can do this.
    pub fn add_member(
        env: Env,
        caller: Address,
        group_id: BytesN<32>,
        new_member: Address,
    ) -> Result<(), TrisigError> {
        caller.require_auth();

        let mut group: Group = env
            .storage()
            .persistent()
            .get(&DataKey::Group(group_id.clone()))
            .ok_or(TrisigError::GroupNotFound)?;

        if group.admin != caller {
            return Err(TrisigError::Unauthorized);
        }

        let member_key = DataKey::Member(group_id.clone(), new_member.clone());
        if env.storage().persistent().has(&member_key) {
            return Err(TrisigError::AlreadyMember);
        }

        env.storage().persistent().set(&member_key, &true);
        group.member_count += 1;
        env.storage().persistent().set(&DataKey::Group(group_id), &group);

        Ok(())
    }

    /// Get a group by its id.
    pub fn get_group(env: Env, group_id: BytesN<32>) -> Result<Group, TrisigError> {
        env.storage()
            .persistent()
            .get(&DataKey::Group(group_id))
            .ok_or(TrisigError::GroupNotFound)
    }
}
