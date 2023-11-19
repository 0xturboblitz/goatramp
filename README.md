# 🐐GOAT RAMP🐐

Are you... the GOAT? 🐐

When someone pays with a credit card on a payment terminal, the electronic chip in the credit card signs transaction data.
Most often, the bank replies with an other signature to confirm the transaction.

Isn't there something fun to do here??

GoatRamp uses an NFC reader and a fork of a payment terminal to extract signatures from the card during payment. This unlocks two interesting primitives:
- First, in the realm of identity, it becomes possible to prove that one possesses a credit card with certain characteristics. This data can be aggregated with tools like [semaphore](https://github.com/semaphore-protocol/semaphore), [zk-email](https://github.com/zkemail/), [proof of passport](https://github.com/zk-passport/proof-of-passport) or [totem](https://github.com/0xturboblitz/totem) to provide one more proof of unique identity.
- Second, it opens new pathways for trust-minimized onramps and offramps. In particular, it becomes possible for a user to prove that they did a fiat payment and withdraw funds locked on a smart-contract in a trustless manner. This creates a new way to merge traditional and decentralized finance that is more securing for both users and onramp services. We provide a proof of concept smart-contract allowing onramp using credit cards signatures.

### Architecture

We forked [emvpt](https://github.com/mrautio/emvpt/) and [emv-card-simulator](https://github.com/mrautio/emv-card-simulator), which are minimal implementations of a payment terminal and a credit card.
Additionally, we use NFC to read actual credit cards.

To provide succintness and selective disclosure of the transaction information, we verify the signatures in a zk-snark.
The most common implementation of signature we found in EMV chips is RSA private key encryption with exponent of 3. This is unusual: instead of being signed with a hash function or being encrypted using the public key of another keypair, the raw message is exponentiated with the private key. It can thus be recovered with the public key.

We provide an implementation of rsa encryption check with exponent of 3 in circom and we compile a verifier for EVM chains.

### Run it

Instructions to run are provided in each subdirectories.

### Deployments

