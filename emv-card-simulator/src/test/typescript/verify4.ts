import * as crypto from 'crypto';
import * as forge from 'node-forge';

const modulus = "135362253209113164836142929847417599068049081750282836314418620176265804533656198308147680572138117228230896618795174349134512308759897452914176852431860685473370067160633397478284638231854333889620976237897812395879211494456464028856749788423557965996372326191226234986624589409240231108419930422758400793597"
const exponent = "3"
const cipher = [107, 157, 208, 100, 69, 200, 167, 255, 144, 183, 159, 193, 87, 151, 96, 147, 52, 58, 19, 157, 11, 28, 77, 161, 86, 93, 107, 134, 99, 96, 101, 80, 52, 186, 239, 122, 132, 207, 210, 34, 79, 8, 129, 167, 195, 178, 101, 115, 80, 164, 216, 208, 11, 148, 52, 94, 208, 134, 240, 161, 69, 193, 0, 69, 10, 134, 201, 50, 195, 37, 101, 56, 162, 226, 195, 142, 21, 34, 176, 53, 147, 217, 251, 57, 92, 247, 242, 98, 204, 207, 161, 123, 89, 30, 157, 102, 95, 78, 21, 72, 210, 44, 78, 138, 213, 246, 193, 141, 22, 119, 144, 142, 240, 59, 207, 27, 61, 49, 12, 89, 19, 186, 207, 72, 124, 232, 231, 238]
const message = [106, 5, 1, 3, 81, 55, 62, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 227, 96, 209, 191, 150, 91, 190, 220, 97, 41, 224, 253, 30, 103, 184, 31, 168, 234, 186, 69, 188]

// Create a public key
const publicKey = forge.pki.rsa.setPublicKey(
  new forge.jsbn.BigInteger(modulus, 10),
  new forge.jsbn.BigInteger(exponent, 10),
);

// Convert the cipher array to a binary string
// const cipherBinary = forge.util.binary.raw.encode(new Uint8Array(cipher));
const cipherBinary = Buffer.from(cipher).toString(
  'binary',
);

// Create a SHA-256 hash of the message
// const md = forge.md.sha256.create();
// md.update(forge.util.binary.raw.encode(new Uint8Array(message.slice(-20))));
// const hashOfMessage = md.digest().getBytes();

const last20BytesOfMessage = message.slice(-20);
console.log('last20BytesOfMessage', last20BytesOfMessage)

// const hashOfMessage = forge.util.binary.raw.encode(new Uint8Array(last20BytesOfMessage));
const hashOfMessage = Buffer.from(last20BytesOfMessage).toString(
  'binary',
);

console.log('hashOfMessage', hashOfMessage)

// Verify the signature
const isValid = publicKey.verify(hashOfMessage, cipherBinary);

console.log('Signature is valid:', isValid);