const { createPublicKey, publicDecrypt } = require('crypto');

const modulusHex = 'C0C3229FB5DA18D0718416DD70C495B1495A1838B7A1D6AFF2C078ABF24D3073C0CBF1F8FB7D7C4EEF925E00C357B09DD2ED296B15898CC02A0A68BEAEB596AEDF7E5D7AF7718F48E4D4B01B53FC444EB5812D3E3BC186938D711A89296D80AA4ED349B26AFDE3C107221B98E80BEB604D99F0985D4348D4A7D91ADEA0971BFD';
const exponent = "3"
const cipher = [107, 157, 208, 100, 69, 200, 167, 255, 144, 183, 159, 193, 87, 151, 96, 147, 52, 58, 19, 157, 11, 28, 77, 161, 86, 93, 107, 134, 99, 96, 101, 80, 34, 186, 239, 122, 132, 207, 210, 34, 79, 8, 129, 167, 195, 178, 101, 115, 80, 164, 216, 208, 11, 148, 52, 94, 208, 134, 240, 161, 69, 193, 0, 69, 10, 134, 201, 50, 195, 37, 101, 56, 162, 226, 195, 142, 21, 34, 176, 53, 147, 217, 251, 57, 92, 247, 242, 98, 204, 207, 161, 123, 89, 30, 157, 102, 95, 78, 21, 72, 210, 44, 78, 138, 213, 246, 193, 141, 22, 119, 144, 142, 240, 59, 207, 27, 61, 49, 12, 89, 19, 186, 207, 72, 124, 232, 231, 238];

const publicKey = createPublicKey({
  key: {
      n: Buffer.from(modulusHex, 'hex'),
      e: Buffer.from(exponent),
  },
  format: 'der',
  type: 'spki',
});

const encryptedMessage = Buffer.from(cipher);
const decryptedMessage = publicDecrypt(publicKey, encryptedMessage);

console.log(decryptedMessage.toString());