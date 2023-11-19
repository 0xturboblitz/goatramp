# 🐐GOAT RAMP🐐

Are you... the GOAT? 🐐

When someone pays with a credit card on a payment terminal, the electronic chip in the credit card signs transaction data.
Most often, the bank replies with another signature to confirm the transaction.

Isn't there something fun to do here??

GoatRamp uses an NFC reader and a fork of a payment terminal to extract signatures from the card during payment. This unlocks two interesting primitives:
- First, in the realm of identity, it becomes possible to prove that one possesses a credit card with certain characteristics. This data can be aggregated with tools like [semaphore](https://github.com/semaphore-protocol/semaphore), [zk-email](https://github.com/zkemail/), [proof of passport](https://github.com/zk-passport/proof-of-passport) or [totem](https://github.com/0xturboblitz/totem) to provide one more proof of unique identity.
- Second, it opens new pathways for trust-minimized onramps and offramps. In particular, it becomes possible for a user to prove that they did a fiat payment and withdraw funds locked on a smart-contract in a trustless manner. This creates a new way to merge traditional and decentralized finance that is more securing for both users and onramp services. We provide a proof of concept smart-contract allowing onramp using credit cards signatures.

### Architecture

We forked [emvpt](https://github.com/mrautio/emvpt/) and [emv-card-simulator](https://github.com/mrautio/emv-card-simulator), which are minimal implementations of a payment terminal and a credit card.
Additionally, we use NFC to read actual credit cards.

<p align="center">
  <img src="https://github.com/0xturboblitz/goatramp/assets/62038140/1e74ae16-377e-40e0-b43d-4ce67beda324" />
</p>

To provide succintness and selective disclosure of the transaction information, we verify the signatures in a zk-snark.
The most common implementation of signature we found in EMV chips is RSA private key encryption with exponent of 3. This is unusual: instead of being signed with a hash function or being encrypted using the public key of another keypair, the raw message is exponentiated with the private key. It can thus be recovered with the public key.

We provide an implementation of rsa encryption check with exponent of 3 in circom and we compile a verifier for EVM chains.

### Run it

Instructions to run are provided in each subdirectories.

### Deployments
- Gnosis: 0xd7c3B15cbB931C8d48daCC6f622d451adCb382a3
- Arbitrum Goerli: 0x9c891A2C692D672059a171b4499eC3c61093eC34
- Polygon Mumbai: 0x8afc8DeF78136F05a3C139FD5A95cE02e4190A35
- Scroll Testnet: 0x9c891A2C692D672059a171b4499eC3c61093eC34
- Celo Alfajores: 0xd7c3B15cbB931C8d48daCC6f622d451adCb382a3
- Base: 0x9c891A2C692D672059a171b4499eC3c61093eC34,
- NeonEVM: 0x2C44D2c033C7EC6bF4eaf3000fa5094770F533be
- Linea testnet: 0xBf79f2F49e9c4F1284149ddEFfB5CA4325bf4226
