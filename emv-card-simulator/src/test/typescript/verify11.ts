import * as fs from 'fs';
import * as crypto from 'crypto';

const KEY_SIZE = 1408;
const KEY_BYTE_SIZE = KEY_SIZE / 8;

// Read the private key from the file
// const privateKeyPem = fs.readFileSync("./AFFFFFFFFF_92_ca_private_key.pem", 'utf8');
const privateKeyPem = fs.readFileSync("./icc_1234560012345608_e_3_private_key.pem", 'utf8');
const privateKey = crypto.createPrivateKey(privateKeyPem);

// Extract public key from the private key
const publicKeyPem = crypto.createPublicKey(privateKeyPem).export({ type: 'spki', format: 'pem' }) as string;
const publicKey = crypto.createPublicKey(publicKeyPem);
fs.writeFileSync('icc_1234560012345608_e_3_public_key.pem', publicKeyPem);



// Debug log (replace with your preferred logging method)
console.debug("Private Key:", privateKeyPem);
console.debug("Public Key:", publicKeyPem);

// Encrypt and decrypt data
let plaintextData = Buffer.alloc(KEY_BYTE_SIZE);
plaintextData[0] = 0x6A;
plaintextData[1] = 0xFF;
plaintextData[KEY_BYTE_SIZE - 1] = 0xBC;

// Encrypt with the private key
const encryptedData = crypto.privateEncrypt(
    {
        key: privateKey,
        padding: crypto.constants.RSA_NO_PADDING
    },
    plaintextData
);

// Decrypt with the public key
const decryptedData = crypto.publicDecrypt(
    {
        key: publicKey,
        padding: crypto.constants.RSA_NO_PADDING
    },
    encryptedData
);

console.log('decryptedData', decryptedData)
console.log('plaintextData', plaintextData)
