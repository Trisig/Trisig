# Contributing to TriSig

Thanks for your interest in contributing. TriSig is built in public and welcomes contributions from developers who care about Stellar, Soroban, and financial infrastructure for real communities.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [How to Contribute](#how-to-contribute)
4. [Smart Contract Contributions](#smart-contract-contributions)
5. [Commit Style](#commit-style)
6. [Pull Request Process](#pull-request-process)
7. [Code of Conduct](#code-of-conduct)

---

## Getting Started

Fork the repo and clone your fork:

```bash
git clone https://github.com/your-username/trisig.git
cd trisig
```

Create a branch for your work:

```bash
git checkout -b feat/your-feature-name
```

---

## Project Structure

```
trisig/
├── contract/       # Soroban smart contracts (Rust)
├── frontend/       # Next.js web app
└── README.md
```

---

## How to Contribute

- Bug fixes, new features, tests, and documentation improvements are all welcome
- Check open issues before starting — comment on one to claim it, or open a new issue to discuss your idea first
- Keep PRs focused. One feature or fix per PR makes review faster
- If you're adding a feature, add tests for it

---

## Smart Contract Contributions

The contract is written in Rust using the [Soroban SDK](https://developers.stellar.org/docs/smart-contracts).

### Prerequisites

```bash
# Install Rust
curl https://sh.rustup.rs -sSf | sh

# Add the wasm target
rustup target add wasm32v1-none
```

### Run tests

```bash
cd contract
cargo test
```

### Build the contract

```bash
cargo build --target wasm32v1-none --release
```

### Guidelines for contract changes

- All new functions must have corresponding tests in `contract/tests/`
- Error types go in `src/errors.rs`
- Storage keys and structs go in `src/storage_types.rs`
- Keep functions focused — one responsibility per function
- Do not introduce dependencies without discussion

---

## Commit Style

Use [Conventional Commits](https://www.conventionalcommits.org):

```
feat: add guardian spending limit enforcement
fix: correct member count on group creation
test: add edge case for duplicate member
docs: update contract README
chore: bump soroban-sdk to 21.1.0
```

---

## Pull Request Process

1. Make sure `cargo test` passes before opening a PR
2. Fill out the PR description — what does it do and why
3. Link the related issue if there is one
4. Request a review — a maintainer will respond within a few days
5. Address review feedback and push updates to the same branch

PRs that break existing tests or have no description will not be merged.

---

## Code of Conduct

Be respectful. This project is built for communities that deserve good tools. Harassment, discrimination, or bad-faith contributions will not be tolerated.

---

Built on Stellar. Designed for trust.
