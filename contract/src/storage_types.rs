use soroban_sdk::{contracttype, Address, BytesN, String};

/// Top-level storage keys
#[contracttype]
#[derive(Clone)]
pub enum DataKey {
    Admin,
    Group(BytesN<32>),
    Member(BytesN<32>, Address),
}

/// A TriSig group treasury
#[contracttype]
#[derive(Clone)]
pub struct Group {
    pub id: BytesN<32>,
    pub name: String,
    pub admin: Address,
    pub balance: i128,
    pub threshold: u32,
    pub member_count: u32,
}
