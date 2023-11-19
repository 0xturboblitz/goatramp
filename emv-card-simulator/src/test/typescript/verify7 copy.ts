import * as NodeRSA from 'node-rsa';

// Generate an RSA key pair
const key = new NodeRSA({b: 2048});

// Export keys in PEM format
const privateKey = key.exportKey('private');
const publicKey = key.exportKey('public');

// Create new instances for the 'reversed' process
const encryptKey = new NodeRSA(privateKey);
const decryptKey = new NodeRSA(publicKey);

// Message to encrypt
// const message = 'Hello, World!';
// const message = '0xE6E4b6a802F2e0aeE5676f6010e0AF5C9CDd0a50';
const message = Buffer.from([106, 5, 1, 3, 81, 55, 62, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 227, 96, 209, 191, 150, 91, 190, 220, 97, 41, 224, 253, 30, 103, 184, 31, 168, 234, 186, 69, 188]);

// Encrypt with the private key
const encrypted = encryptKey.encryptPrivate(message, 'base64');

console.log('Encrypted:', encrypted);

// Decrypt with the public key
const decrypted = decryptKey.decryptPublic(encrypted, 'buffer');

console.log('Decrypted:', Array.from(decrypted));
