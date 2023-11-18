pragma circom 2.1.5;

include "./fp_pow3_mod.circom";
include "../node_modules/circomlib/circuits/poseidon.circom";
include "./helpers/extract.circom";

template CreditCardSignatureVerifier(n, k) {
    signal input pubkey[k];
    signal input encrypted[k];
    signal input decrypted[k];

    component rsa = FpPow3Mod(64, 32);
    rsa.base <== encrypted;
    rsa.modulus <== pubkey;

    for (var i = 0; i < k; i++) {
        decrypted[i] === rsa.out[i];
    }
}

component main { public [ pubkey, decrypted ] }= CreditCardSignatureVerifier(64, 32);
