export function toUnsigned(byte: number) {
  return byte & 0xff;
}

export function arraysAreEqual(array1: number[], array2: number[]) {
  return (
    array1.length === array2.length &&
    array1.every((value, index) => value === array2[index])
  );
}

export function toSigned(byte: number) {
  return byte > 127 ? byte - 256 : byte;
}

export function parsePubKeyString(pubKeyString: string) {
  const modulusMatch = pubKeyString.match(/modulus: ([\w\d]+)\s*public/);
  const publicExponentMatch = pubKeyString.match(/public exponent: (\w+)/);

  const modulus = modulusMatch ? modulusMatch[1] : null;
  const exponent = publicExponentMatch ? publicExponentMatch[1] : null;

  // console.log('Modulus:', modulus);
  // console.log('Public Exponent:', exponent);

  if (!modulus || !exponent) {
    throw new Error('Could not parse public key string');
  }

  return {
    modulus,
    exponent,
  };
}

export const toBinaryString = (byte: any) => {
  const binary = (parseInt(byte, 10) & 0xFF).toString(2).padStart(8, '0');
  return binary;
};

export function splitToWords(
  number: bigint,
  wordsize: bigint,
  numberElement: bigint
) {
  let t = number
  const words: string[] = []
  for (let i = BigInt(0); i < numberElement; ++i) {
    const baseTwo = BigInt(2)

    words.push(`${t % BigInt(Math.pow(Number(baseTwo), Number(wordsize)))}`)
    t = BigInt(t / BigInt(Math.pow(Number(BigInt(2)), Number(wordsize))))
  }
  if (!(t == BigInt(0))) {
    throw `Number ${number} does not fit in ${(
      wordsize * numberElement
    ).toString()} bits`
  }
  return words
}

export function bytesToBigDecimal(arr: number[]): string {
  let result = BigInt(0);
  for (let i = 0; i < arr.length; i++) {
    result = result * BigInt(256) + BigInt(arr[i] & 0xff);
  }
  return result.toString();
}

export function hexToDecimal(hex: string): string {
  return BigInt(`0x${hex}`).toString();
}