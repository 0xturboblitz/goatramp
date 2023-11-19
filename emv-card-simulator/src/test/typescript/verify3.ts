import * as crypto from 'crypto';
import * as forge from 'node-forge';

const modulus = "BF08CA64EA24B2644772CA60DAE61A68DE449A1F43503A1025103BDE7487FF2D60E23AF37400BBB6A8075C79EB38D775ED5F251E15268128CA152DC5F33E017F14AE11FA2E07298F559387F4F47997DB09AEE867712E56545825C4B12A197C8ABE68E7E24A20B8717453733D0BF12F3CF8AA89CB9BD07A2468B6132410C1E62FD1DFEC2C5D7C35B5475C520783E01E549F4C44DECBC2A0587763851738E4CAF22EB0E8747DBF828C2207FECE8460030F"
const exponent = "3"
const signature = [32, 8, 251, 64, 221, 168, 153, 153, 175, 135, 58, 13, 155, 171, 21, 141, 90, 206, 17, 52, 79, 227, 143, 114, 5, 60, 197, 236, 207, 228, 150, 187, 165, 139, 55, 214, 105, 186, 178, 206, 175, 147, 127, 50, 151, 53, 224, 39, 65, 231, 18, 44, 131, 43, 227, 60, 209, 170, 56, 210, 124, 218, 204, 237, 139, 2, 240, 234, 35, 28, 124, 107, 203, 248, 35, 158, 207, 44, 17, 149, 75, 64, 125, 88, 233, 166, 137, 171, 34, 223, 201, 152, 2, 42, 23, 159, 175, 198, 25, 171, 197, 171, 35, 124, 104, 65, 2, 57, 18, 147, 149, 87, 94, 98, 63, 79, 139, 168, 56, 10, 57, 7, 172, 244, 32, 9, 184, 195, 211, 15, 209, 15, 187, 145, 177, 61, 192, 20, 182, 25, 186, 88, 76, 224, 185, 172, 111, 177, 211, 164, 167, 69, 3, 246, 144, 136, 127, 17, 19, 19, 208, 16, 163, 167, 17, 126, 140, 4, 68, 135, 70, 211, 170, 248, 136, 234]
const message = [6A, 02, 12, 34, 56, FF, 12, 30, 12, 34, 56, 01, 01, B0, 01, E2, B3, CB, 08, DA, 28, EF, 75, FE, 17, 3E, 32, 96, E7, 2A, 70, 10, 2A, 50, 70, EE, D5, D6, 41, EF, 5A, 24, 62, 31, 0F, E5, B3, 60, 10, F2, EC, 60, 65, C4, 07, 49, 52, D1, F5, CB, BB, 41, 6F, F2, 42, 3F, A6, 92, 47, 3B, 72, C3, 6D, 22, 90, 21, 50, 82, 1C, B7, BC, A5, DB, 1D, 2A, F4, 1D, 19, E8, CA, 59, 0C, 63, FF, 26, F8, B1, 2A, 34, 16, A1, DE, F1, 36, 0E, DC, B5, 6A, 68, AC, 00, 7D, 22, 26, D5, 6D, 65, B3, 31, D3, 42, 3C, 62, 87, B7, C4, C4, 2B, 8E, 64, B1, B4, 26, 7A, 0D, 59, BF, F2, A6, C4, 1A, 1E, DB, 0B, FE, DD, E0, 5E, C7, F9, 2E, CE, 81, EB, 65, 0C, F4, 10, D3, 71, 70, 7F, F2, 46, 9D, 8A, D8, C8, 23, F4, 72, 48, DE, 16, AD, BC]

// now let's verify the signature
// const {modulus, exponent} = parsePubKeyString(passportData.publicKey);
// Create the public key
const rsa = forge.pki.rsa;
const publicKey = rsa.setPublicKey(
  new forge.jsbn.BigInteger(modulus, 16),
  new forge.jsbn.BigInteger(exponent, 10),
);

// SHA-256 hash of the eContent
const md = forge.md.sha256.create();
md.update(forge.util.binary.raw.encode(new Uint8Array(message)));
const hashOfEContent = md.digest().getBytes();

// Signature verification
const signatureBytes = signature.toString(
  'binary',
);
const valid = publicKey.verify(hashOfEContent, signatureBytes);

if (valid) {
  console.log('The signature is valid.');
} else {
  console.log('The signature is not valid.');
}
