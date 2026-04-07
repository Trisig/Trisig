# TriSig — Soroban Smart Contract

Soroban smart contract for TriSig group treasury management on the Stellar network.

## Structure

```
contract/
├── Cargo.toml
└── src/
    ├── lib.rs              # Module wiring
    ├── errors.rs           # Contract error types
    ├── storage_types.rs    # Storage keys and data structs
    ├── treasury.rs         # Contract entry points
    └── treasury_tests.rs   # Unit tests
```

## Functions

| Function                                    | Description                                                         |
| ------------------------------------------- | ------------------------------------------------------------------- |
| `initialize(admin)`                         | Set the contract admin. Can only be called once.                    |
| `create_group(caller, id, name, threshold)` | Create a new group treasury. Caller becomes admin and first member. |
| `add_member(caller, group_id, new_member)`  | Add a member to a group. Only the group admin can call this.        |
| `get_group(group_id)`                       | Fetch a group by its id.                                            |

## Quick Start

```bash
# Install Rust + wasm target
rustup target add wasm32v1-none

# Build
cargo build --target wasm32v1-none --release

# Test
cargo test
```

## Deploy (Testnet)

```bash
soroban contract deploy \
  --wasm target/wasm32v1-none/release/trisig.wasm \
  --source <identity> \
  --network testnet
```
