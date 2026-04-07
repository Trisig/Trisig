# TriSig

**Transparent group finance and family trust management, powered by Stellar.**

TriSig is a decentralized app for trusted groups — friends, roommates, families, communities — to manage shared money on-chain. Every group gets a real Stellar multisig account as their treasury, with balances verifiable by anyone via Horizon or any Stellar block explorer. Members join as on-chain signers, contribute in XLM or USDC, and split bills with full payment history. Funds only move when a configurable threshold of signers approves — no single member can act alone. Goals, locked allocations, and spending rules are enforced by Soroban smart contracts directly on the ledger. No middleman. No hidden state. The treasury is the source of truth.

---

## Guardian Accounts

The standout feature of TriSig.

Across Africa and much of the world, parents send money to children studying away from home with zero visibility into how it's spent. School fees get delayed. Peer pressure leads to poor decisions. There's no recourse.

Guardian Accounts fix this. A child gets a real Stellar wallet with programmable rules baked in at the contract level — enforced automatically on every transaction, forever.

**Rules a guardian can set:**

- Spending limits — weekly, monthly, or daily caps
- Destination whitelisting — funds only reach approved addresses (school, canteen, bookshop)
- Category budgets — separate allocations for fees, feeding, transport, personal spending
- Savings locks — ringfenced funds released only when a condition is met
- Scheduled auto-payments — school fees paid automatically to the institution on the right date
- Time restrictions — spending limited to school days or specific hours

The guardian sees everything on a live dashboard — balances, transactions, pending requests — in real time. The child gets a clean wallet that works like any other payment app. The rules run silently in the background.

This is not a parental lock on a banking app. It is a programmable, transparent, on-chain trust account. No intermediary holds the funds. No company can change the rules.

---

## How It Works

| Feature               | Stellar Mechanism                          |
| --------------------- | ------------------------------------------ |
| Group treasury        | Multisig account                           |
| Member permissions    | Stellar signers                            |
| Spending approval     | Threshold signatures                       |
| Payments              | Stellar payment operations                 |
| Programmable rules    | Soroban smart contracts                    |
| Spending limits       | Soroban time-locked cumulative tracking    |
| Destination whitelist | Contract-enforced allowed address registry |
| Scheduled payments    | Claimable balances + Soroban invocations   |

---

## Tech Stack

| Layer           | Technology          |
| --------------- | ------------------- |
| Frontend        | Next.js             |
| Backend         | Node.js             |
| Blockchain      | Stellar Network     |
| Smart Contracts | Soroban             |
| Indexing        | Stellar Horizon API |
| Assets          | USDC / XLM          |

---

## Why Stellar

- 3–5 second finality
- Near-zero fees — practical for micropayments
- Native multisig — first-class protocol feature
- USDC support — stable, dollar-denominated payments
- Soroban — modern, auditable smart contract platform
- Horizon API — rich real-time account indexing

---

---

## Contributing

TriSig is being built in public. If you work with Stellar, Soroban, or care about financial infrastructure for underserved communities — open an issue or reach out.

