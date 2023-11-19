import * as forge from 'node-forge';

function createPublicKeyFromComponents(modulus: number[], exponent: number[]): forge.pki.rsa.PublicKey {
  // Convert arrays of numbers into hexadecimal strings
  const modulusHex = modulus.map(byte => byte.toString(16).padStart(2, '0')).join('');
  const exponentHex = exponent.map(byte => byte.toString(16).padStart(2, '0')).join('');

  console.log('modulusHex:', modulusHex);

  // Convert the hexadecimal strings into Forge-compatible BigInteger objects
  // const n = forge.util.createBuffer(forge.util.hexToBytes(modulusHex)).toBigInteger();
  // const e = forge.util.createBuffer(forge.util.hexToBytes(exponentHex)).toBigInteger();
  const n = new forge.jsbn.BigInteger(modulusHex, 16);
  const e = new forge.jsbn.BigInteger(exponentHex, 16);

  // Create and return a Forge RSA public key
  return forge.pki.rsa.setPublicKey(n, e);
}

function verifySignature(issuerPublicKey, signature, originalData) {
  // Convert the signature to a format compatible with Forge
  let signatureData = forge.util.createBuffer(signature.toString('binary')).getBytes();

  // Decrypt the signature using the issuer's public key
  let decryptedSignature = issuerPublicKey.decrypt(signatureData);

  // Hash the original data
  let md = forge.md.sha256.create();
  md.update(originalData, 'utf8');
  let hash = md.digest().toHex();

  // Compare the decrypted signature (hash) with the hash of the original data
  return decryptedSignature === hash;
}

// Example usage
const issuerPkModulus = [226, 179, 203, 8, 218, 40, 239, 117, 254, 23, 62, 50, 150, 231, 42, 112, 16, 42, 80, 112, 238, 213, 214, 65, 239, 90, 36, 98, 49, 15, 229, 179, 96, 16, 242, 236, 96, 101, 196, 7, 73, 82, 209, 245, 203, 187, 65, 111, 242, 66, 63, 166, 146, 71, 59, 114, 195, 109, 34, 144, 33, 80, 130, 28, 183, 188, 165, 219, 29, 42, 244, 29, 25, 232, 202, 89, 12, 99, 255, 38, 248, 177, 42, 52, 22, 161, 222, 241, 54, 14, 220, 181, 106, 104, 172, 0, 125, 34, 38, 213, 109, 101, 179, 49, 211, 66, 60, 98, 135, 183, 196, 196, 43, 142, 100, 177, 180, 38, 122, 13, 89, 191, 242, 166, 196, 26, 30, 219, 11, 254, 221, 224, 94, 199, 249, 46, 206, 129, 235, 101, 95, 206, 161, 82, 180, 217, 236, 151, 145, 191, 48, 150, 114, 250, 81, 175, 169, 86, 45, 28, 11, 51, 62, 214, 26, 90, 32, 0, 64, 195, 181, 10, 70, 2, 59, 137]
const issuerPkExponent = [3]
const signature = Buffer.from([145, 192, 61, 196, 50, 114, 69, 103, 72, 97, 179, 41, 194, 242, 224, 218, 99, 105, 104, 110, 203, 248, 106, 32, 29, 161, 71, 197, 47, 56, 150, 195, 74, 145, 182, 103, 133, 106, 209, 105, 156, 111, 65, 216, 128, 207, 98, 28, 194, 70, 243, 122, 163, 103, 113, 129, 191, 190, 155, 151, 248, 190, 152, 247, 111, 131, 45, 60, 91, 78, 47, 182, 172, 192, 160, 207, 17, 209, 227, 40, 153, 130, 55, 150, 30, 178, 77, 39, 184, 29, 198, 153, 222, 131, 89, 177, 7, 72, 239, 130, 128, 141, 189, 81, 90, 23, 9, 41, 123, 81, 217, 242, 59, 182, 219, 183, 86, 128, 84, 78, 106, 142, 24, 190, 239, 45, 104, 251, 181, 156, 184, 78, 119, 58, 250, 194, 97, 58, 209, 102, 22, 32, 243, 156, 16, 93, 141, 102, 192, 210, 213, 38, 9, 99, 18, 45, 154, 250, 43, 144, 143, 252, 251, 121, 107, 58, 18, 211, 203, 154, 141, 14, 74, 67, 36, 113]);

const originalData = '...'; // The original data that was signed

const issuerPublicKey = createPublicKeyFromComponents(issuerPkModulus, issuerPkExponent);
const isValid = verifySignature(issuerPublicKey, signature, originalData);
console.log('Is the signature valid?', isValid);