import * as fs from 'fs';
import * as crypto from 'crypto';
const util = require('util');

const KEY_SIZE = 1408;
const KEY_BYTE_SIZE = KEY_SIZE / 8;

// Read the public key from the file
const publicKeyPem = fs.readFileSync("./icc_1234560012345608_e_3_public_key.pem", 'utf8');
const publicKey = crypto.createPublicKey(publicKeyPem);

// Debug log (replace with your preferred logging method)
console.debug("Public Key:", publicKeyPem);
// Log modulus and exponent
const publicKeyDetails = publicKey.export({ format: 'jwk' });
console.log("Modulus (decimal):", BigInt('0x' + Buffer.from(publicKeyDetails.n, 'base64').toString('hex')).toString());
console.log("Exponent:", publicKey.asymmetricKeyDetails.publicExponent);

// Assuming you have the encrypted data (ciphertext) in a Buffer
const encryptedData = Buffer.from([107, 157, 208, 100, 69, 200, 167, 255, 144, 183, 159, 193, 87, 151, 96, 147, 52, 58, 19, 157, 11, 28, 77, 161, 86, 93, 107, 134, 99, 96, 101, 80, 52, 186, 239, 122, 132, 207, 210, 34, 79, 8, 129, 167, 195, 178, 101, 115, 80, 164, 216, 208, 11, 148, 52, 94, 208, 134, 240, 161, 69, 193, 0, 69, 10, 134, 201, 50, 195, 37, 101, 56, 162, 226, 195, 142, 21, 34, 176, 53, 147, 217, 251, 57, 92, 247, 242, 98, 204, 207, 161, 123, 89, 30, 157, 102, 95, 78, 21, 72, 210, 44, 78, 138, 213, 246, 193, 141, 22, 119, 144, 142, 240, 59, 207, 27, 61, 49, 12, 89, 19, 186, 207, 72, 124, 232, 231, 238])

// Decrypt with the public key
const decryptedData = crypto.publicDecrypt(
    {
        key: publicKey,
        padding: crypto.constants.RSA_NO_PADDING
    },
    encryptedData
);


console.log("decryptedData as string", decryptedData.toString("hex"));
console.log("decryptedData as array", util.inspect(Array.from(decryptedData), { maxArrayLength: null }));

const emvptOutput = [106, 5, 1, 3, 81, 55, 62, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 227, 96, 209, 191, 150, 91, 190, 220, 97, 41, 224, 253, 30, 103, 184, 31, 168, 234, 186, 69, 188]
// Check if the arrays are equal
const arraysAreEqual = Array.from(decryptedData).every((value, index) => value === emvptOutput[index]);

console.log("emvptOutput.length", emvptOutput.length);
console.log("Array.from(decryptedData).length", Array.from(decryptedData).length);
console.log("Are the arrays equal?", arraysAreEqual);
