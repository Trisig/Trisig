use soroban_sdk::contracterror;

#[contracterror]
#[derive(Copy, Clone, Debug, PartialEq)]
#[repr(u32)]
pub enum TrisigError {
    NotInitialized = 1,
    AlreadyInitialized = 2,
    Unauthorized = 3,
    GroupNotFound = 4,
    AlreadyMember = 5,
    NotMember = 6,
    InsufficientFunds = 7,
    BelowThreshold = 8,
}
