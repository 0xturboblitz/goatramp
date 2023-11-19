import * as fs from 'fs';
import * as crypto from 'crypto';
const util = require('util');

const KEY_SIZE = 1408;
const KEY_BYTE_SIZE = KEY_SIZE / 8;

// Read the public key from the file
const publicKeyPem = fs.readFileSync("./AFFFFFFFFF_92_ca_public_key.pem", 'utf8');
const publicKey = crypto.createPublicKey(publicKeyPem);

// Debug log (replace with your preferred logging method)
console.debug("Public Key:", publicKeyPem);

// Assuming you have the encrypted data (ciphertext) in a Buffer
const encryptedData = Buffer.from([32, 8, 251, 64, 221, 168, 153, 153, 175, 135, 58, 13, 155, 171, 21, 141, 90, 206, 17, 52, 79, 227, 143, 114, 5, 60, 197, 236, 207, 228, 150, 187, 165, 139, 55, 214, 105, 186, 178, 206, 175, 147, 127, 50, 151, 53, 224, 39, 65, 231, 18, 44, 131, 43, 227, 60, 209, 170, 56, 210, 124, 218, 204, 237, 139, 2, 240, 234, 35, 28, 124, 107, 203, 248, 35, 158, 207, 44, 17, 149, 75, 64, 125, 88, 233, 166, 137, 171, 34, 223, 201, 152, 2, 42, 23, 159, 175, 198, 25, 171, 197, 171, 35, 124, 104, 65, 2, 57, 18, 147, 149, 87, 94, 98, 63, 79, 139, 168, 56, 10, 57, 7, 172, 244, 32, 9, 184, 195, 211, 15, 209, 15, 187, 145, 177, 61, 192, 20, 182, 25, 186, 88, 76, 224, 185, 172, 111, 177, 211, 164, 167, 69, 3, 246, 144, 136, 127, 17, 19, 19, 208, 16, 163, 167, 17, 126, 140, 4, 68, 135, 70, 211, 170, 248, 136, 234]) // Replace with your encrypted data

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

const emvptOutput = [106, 2, 18, 52, 86, 255, 18, 48, 18, 52, 86, 1, 1, 176, 1, 226, 179, 203, 8, 218, 40, 239, 117, 254, 23, 62, 50, 150, 231, 42, 112, 16, 42, 80, 112, 238, 213, 214, 65, 239, 90, 36, 98, 49, 15, 229, 179, 96, 16, 242, 236, 96, 101, 196, 7, 73, 82, 209, 245, 203, 187, 65, 111, 242, 66, 63, 166, 146, 71, 59, 114, 195, 109, 34, 144, 33, 80, 130, 28, 183, 188, 165, 219, 29, 42, 244, 29, 25, 232, 202, 89, 12, 99, 255, 38, 248, 177, 42, 52, 22, 161, 222, 241, 54, 14, 220, 181, 106, 104, 172, 0, 125, 34, 38, 213, 109, 101, 179, 49, 211, 66, 60, 98, 135, 183, 196, 196, 43, 142, 100, 177, 180, 38, 122, 13, 89, 191, 242, 166, 196, 26, 30, 219, 11, 254, 221, 224, 94, 199, 249, 46, 206, 129, 235, 101, 12, 244, 16, 211, 113, 112, 127, 242, 70, 157, 138, 216, 200, 35, 244, 114, 72, 222, 22, 173, 188]
// Check if the arrays are equal
const arraysAreEqual = Array.from(decryptedData).every((value, index) => value === emvptOutput[index]);

console.log("emvptOutput.length", emvptOutput.length);
console.log("Array.from(decryptedData).length", Array.from(decryptedData).length);
console.log("Are the arrays equal?", arraysAreEqual);
