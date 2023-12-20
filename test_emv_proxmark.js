// Decrypted SDAD:
const assert = require('assert');
const crypto = require('crypto');
var decryptedSDAD = new Uint8Array([0x6A, 0x05, 0x01, s, 0x08, 0xAD, 0xB1, 0xE0, 0x39, 0x64, 0x21, 0xBF, 0xB4, 0x80, 0x42, 0x2B, 0x7D, 0xB2, 0xC5, 0xB3, 0x52, 0xBE, 0x3F, 0x86, 0xBA, 0xA5, 0xD8, 0xA9, 0x4C, 0xE2, 0x0D, 0x94, 0x87, 0x79, 0xB9, 0x3F, 0x4B, 0xD4, 0xCE, 0x17, 0x53, 0x5E]);

//Step 1: SDAD and ICC Public Key Modulus have the same length
// assert(SDAD.length == iccPublicKeyModulus.length);
	
//Step 2: The Recovered Data Trailer is equal to 'BC'
// assert(decryptedSDAD[decryptedSDAD.length - 1] == 0xBC);
	
//Step 3: The Recovered Data Header is equal to '6A'
assert(decryptedSDAD[0] == 0x6A);
	
//Step 4: The Signed Data Format is equal to '05'
assert(decryptedSDAD[1] == 0x05);
	
//Step 5: Concatenation of Signed Data Format, Hash Algorithm Indicator,
//        ICC Dynamic Data Length, ICC Dynamic Data, Pad Pattern, random number
var LDD = decryptedSDAD[3];
var list = decryptedSDAD.slice(1, 3 + LDD + decryptedSDAD.length - LDD - 25);
while(list.length < 123) {
    list = [...list, 0xBB];
}
list = [...list, 0x29, 0x21, 0x8F, 0xCE, 0xB5, 0x48, 0xBE, 0x5F];

// list = list.concat(Data);
	
//Step 6: Generate hash from concatenation
// Hash the bytes directly
var hash = crypto.createHash('sha1');
hash.update(Buffer.from(list));
var hashConcat = hash.digest();
	
//Step 7: Compare recovered hash with generated hash
var hashSDAD = decryptedSDAD.slice(decryptedSDAD.length - 21, 20);
console.log(hashSDAD);
console.log(hashConcat);
assert(hashConcat.equals(hashSDAD));
console.log("DDA was successful");	

