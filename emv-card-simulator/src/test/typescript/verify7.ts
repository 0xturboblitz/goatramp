import * as NodeRSA from 'node-rsa';

// Generate an RSA key pair
// const key = new NodeRSA({b: 2048});

const key = new NodeRSA({b: 1024});

const keyPEM = `-----BEGIN PUBLIC KEY-----
3056301006072a8648ce3d020106052b8104000a03420004E1NiJTIJETFkg2FC
kphHQXWZBoBJCBdQKCg2MUQYYgF2JlgEUzZWGYMIFHaAVyE4EXIoIwiWYYeVF0NJ
E0USMIdZiXRSkUF2hSQxhgaFRzNwBnFgYzOXR4KEY4IxhUMziJYgl2I3iXgSOVh5
IRSURWRkAohWdJeIQjVXllmWNyMmGRImI0mGYkWJQJJAIxEIQZkwQidYQAeTWQ==
-----END PUBLIC KEY-----`

const modulusDecimal = "135362253209113164836142929847417599068049081750282836314418620176265804533656198308147680572138117228230896618795174349134512308759897452914176852431860685473370067160633397478284638231854333889620976237897812395879211494456464028856749788423557965996372326191226234986624589409240231108419930422758400793597"
const modulusHex = parseInt(modulusDecimal, 10).toString(16)
// const modulusHex = "C0C3229FB5DA18D0718416DD70C495B1495A1838B7A1D6AFF2C078ABF24D3073C0CBF1F8FB7D7C4EEF925E00C357B09DD2ED296B15898CC02A0A68BEAEB596AEDF7E5D7AF7718F48E4D4B01B53FC444EB5812D3E3BC186938D711A89296D80AA4ED349B26AFDE3C107221B98E80BEB604D99F0985D4348D4A7D91ADEA0971BFD"

console.log('modulusHex', modulusHex)
const buffer = Buffer.from(modulusHex, "hex")

console.log('buffer', buffer)
key.importKey({
  n: buffer,
  e: 3
}, "components");

// const privateKey = key.exportKey('private');
// const publicKey = key.exportKey('public');


// // Create new instances for the 'reversed' process
// const encryptKey = new NodeRSA(privateKey);
// const decryptKey = new NodeRSA(publicKey);

// // Message to encrypt
// // const message = 'Hello, World!';
// // const message = '0xE6E4b6a802F2e0aeE5676f6010e0AF5C9CDd0a50';
// const message = Buffer.from([106, 5, 1, 3, 81, 55, 62, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 227, 96, 209, 191, 150, 91, 190, 220, 97, 41, 224, 253, 30, 103, 184, 31, 168, 234, 186, 69, 188]);

// // Encrypt with the private key
// const encrypted = encryptKey.encryptPrivate(message, 'base64');

// console.log('Encrypted:', encrypted);

// // Decrypt with the public key
// const decrypted = decryptKey.decryptPublic(encrypted, 'buffer');

// console.log('Decrypted:', Array.from(decrypted));
