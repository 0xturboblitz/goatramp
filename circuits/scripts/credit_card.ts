import { groth16 } from "snarkjs";
import fs from "fs";
import {bytesToBigDecimal, splitToWords } from '../utils/utils'

const modulus = "135362253209113164836142929847417599068049081750282836314418620176265804533656198308147680572138117228230896618795174349134512308759897452914176852431860685473370067160633397478284638231854333889620976237897812395879211494456464028856749788423557965996372326191226234986624589409240231108419930422758400793597"
const encrypted = [107, 157, 208, 100, 69, 200, 167, 255, 144, 183, 159, 193, 87, 151, 96, 147, 52, 58, 19, 157, 11, 28, 77, 161, 86, 93, 107, 134, 99, 96, 101, 80, 52, 186, 239, 122, 132, 207, 210, 34, 79, 8, 129, 167, 195, 178, 101, 115, 80, 164, 216, 208, 11, 148, 52, 94, 208, 134, 240, 161, 69, 193, 0, 69, 10, 134, 201, 50, 195, 37, 101, 56, 162, 226, 195, 142, 21, 34, 176, 53, 147, 217, 251, 57, 92, 247, 242, 98, 204, 207, 161, 123, 89, 30, 157, 102, 95, 78, 21, 72, 210, 44, 78, 138, 213, 246, 193, 141, 22, 119, 144, 142, 240, 59, 207, 27, 61, 49, 12, 89, 19, 186, 207, 72, 124, 232, 231, 238]
const decrypted = [106, 5, 1, 3, 81, 55, 62, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 227, 96, 209, 191, 150, 91, 190, 220, 97, 41, 224, 253, 30, 103, 184, 31, 168, 234, 186, 69, 188]

async function main() {
  const inputs = {
    pubkey: splitToWords(
      BigInt(modulus),
      BigInt(64),
      BigInt(32)
    ),
    encrypted: splitToWords(
      BigInt(bytesToBigDecimal(encrypted)),
      BigInt(64),
      BigInt(32)
    ),
    decrypted: splitToWords(
      BigInt(bytesToBigDecimal(decrypted)),
      BigInt(64),
      BigInt(32)
    ),
  }

  // Uncomment this to test the circuit without generating the proving key
  // const wasm_tester = require("../node_modules/circom_tester").wasm;
  // const circuit = await wasm_tester(
  //   path.join(__dirname, "../circuits/credit_card.circom"),
  //   { include: ["node_modules"] },
  // );
  // const w = await circuit.calculateWitness(inputs);
  // console.log("witness calculated", w);
  // await circuit.checkConstraints(w);
  // console.log("finished checking constraints");

  const { proof, publicSignals } = await groth16.fullProve(
    inputs,
    "build/credit_card_js/credit_card.wasm",
    "build/credit_card_final.zkey"
  )

  console.log('proof done');
  console.log('proof', proof)
  console.log('publicSignals', publicSignals)

  const vKey = JSON.parse(fs.readFileSync("build/verification_key.json", 'utf8'));
  const verified = await groth16.verify(
    vKey,
    publicSignals,
    proof
  )

  console.log('proof verified', verified);
  process.exit()
}

main()