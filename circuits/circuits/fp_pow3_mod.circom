pragma circom 2.1.5;

include "./helpers/fp.circom";

// Computes base^3 mod modulus
// Does not necessarily reduce fully mod modulus (the answer could be
// too big by a multiple of modulus)
template FpPow3Mod(n, k) {
    signal input base[k];
    // Exponent is hardcoded at 3
    signal input modulus[k];
    signal output out[k];

    component doubler = FpMul(n, k);  // For squaring the base
    component multiplier = FpMul(n, k);  // For multiplying the squared base with the original base

    // Set modulus for both components
    for (var j = 0; j < k; j++) {
        doubler.p[j] <== modulus[j];
        multiplier.p[j] <== modulus[j];
    }

    // Square the base
    for (var j = 0; j < k; j++) {
        doubler.a[j] <== base[j];
        doubler.b[j] <== base[j];
    }

    // Multiply the squared base with the original base
    for (var j = 0; j < k; j++) {
        multiplier.a[j] <== doubler.out[j];
        multiplier.b[j] <== base[j];
    }

    // Output the result
    for (var j = 0; j < k; j++) {
        out[j] <== multiplier.out[j];
    }
}
