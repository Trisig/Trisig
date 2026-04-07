#[cfg(test)]
mod tests {
    use soroban_sdk::{testutils::Address as _, Address, BytesN, Env, String};

    use trisig::treasury::{TrisigContract, TrisigContractClient};

    fn setup() -> (Env, TrisigContractClient<'static>) {
        let env = Env::default();
        env.mock_all_auths();
        let contract_id = env.register_contract(None, TrisigContract);
        let client = TrisigContractClient::new(&env, &contract_id);
        (env, client)
    }

    fn make_id(env: &Env, seed: u8) -> BytesN<32> {
        BytesN::from_array(env, &[seed; 32])
    }

    // -----------------------------------------------------------------------
    // initialize
    // -----------------------------------------------------------------------

    #[test]
    fn test_initialize_succeeds() {
        let (env, client) = setup();
        let admin = Address::generate(&env);
        client.initialize(&admin);
    }

    #[test]
    #[should_panic]
    fn test_initialize_twice_fails() {
        let (env, client) = setup();
        let admin = Address::generate(&env);
        client.initialize(&admin);
        client.initialize(&admin); // should panic — AlreadyInitialized
    }

    // -----------------------------------------------------------------------
    // create_group
    // -----------------------------------------------------------------------

    #[test]
    fn test_create_group_succeeds() {
        let (env, client) = setup();
        let admin = Address::generate(&env);
        client.initialize(&admin);

        let id = make_id(&env, 1);
        let name = String::from_str(&env, "Trip Fund");
        let group = client.create_group(&admin, &id, &name, &2);

        assert_eq!(group.member_count, 1);
        assert_eq!(group.threshold, 2);
        assert_eq!(group.balance, 0);
        assert_eq!(group.admin, admin);
    }

    #[test]
    #[should_panic]
    fn test_create_group_duplicate_id_fails() {
        let (env, client) = setup();
        let admin = Address::generate(&env);
        client.initialize(&admin);

        let id = make_id(&env, 1);
        let name = String::from_str(&env, "Trip Fund");
        client.create_group(&admin, &id, &name, &2);
        client.create_group(&admin, &id, &name, &2); // should panic — duplicate
    }

    // -----------------------------------------------------------------------
    // add_member
    // -----------------------------------------------------------------------

    #[test]
    fn test_add_member_succeeds() {
        let (env, client) = setup();
        let admin = Address::generate(&env);
        let member = Address::generate(&env);
        client.initialize(&admin);

        let id = make_id(&env, 2);
        client.create_group(&admin, &id, &String::from_str(&env, "Rent Squad"), &2);
        client.add_member(&admin, &id, &member);

        let group = client.get_group(&id);
        assert_eq!(group.member_count, 2);
    }

    #[test]
    #[should_panic]
    fn test_add_member_non_admin_fails() {
        let (env, client) = setup();
        let admin = Address::generate(&env);
        let rando = Address::generate(&env);
        let member = Address::generate(&env);
        client.initialize(&admin);

        let id = make_id(&env, 3);
        client.create_group(&admin, &id, &String::from_str(&env, "Savings"), &1);
        client.add_member(&rando, &id, &member); // should panic — Unauthorized
    }

    #[test]
    #[should_panic]
    fn test_add_duplicate_member_fails() {
        let (env, client) = setup();
        let admin = Address::generate(&env);
        let member = Address::generate(&env);
        client.initialize(&admin);

        let id = make_id(&env, 4);
        client.create_group(&admin, &id, &String::from_str(&env, "Family"), &1);
        client.add_member(&admin, &id, &member);
        client.add_member(&admin, &id, &member); // should panic — AlreadyMember
    }

    // -----------------------------------------------------------------------
    // get_group
    // -----------------------------------------------------------------------

    #[test]
    fn test_get_group_succeeds() {
        let (env, client) = setup();
        let admin = Address::generate(&env);
        client.initialize(&admin);

        let id = make_id(&env, 5);
        client.create_group(&admin, &id, &String::from_str(&env, "Community Pool"), &3);

        let group = client.get_group(&id);
        assert_eq!(group.threshold, 3);
    }

    #[test]
    #[should_panic]
    fn test_get_group_not_found_fails() {
        let (env, client) = setup();
        let admin = Address::generate(&env);
        client.initialize(&admin);

        let id = make_id(&env, 99);
        client.get_group(&id); // should panic — GroupNotFound
    }
}
