# Circuits for credit card signature

This circuit performs modular exponentiation by 3. Based on zk-email implementation of rsa signature (I believe, borrowed from double-blind).

🚧 under heavy development 🚧

#### Requirements

Install `circom` and `nodejs v18`

#### Installation

```bash
yarn
```

#### Build circuits (dev only, not secure)

```bash
./scripts/build_circuit.sh
```

#### Run

```bash
ts-node scripts/credit_card.ts
```

This will run tests with sample data hardcoded.
