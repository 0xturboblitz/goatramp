import { ethers } from "hardhat";

async function main() {
  const CreditCardVerifier = await ethers.getContractFactory("CreditCardVerifier");
  const ccVerifier = await CreditCardVerifier.deploy();

  await ccVerifier.waitForDeployment();

  console.log(`CreditCardVerifier deployed to ${ccVerifier.target}`);

  const GoatRamp = await ethers.getContractFactory("GOATRAMP");
  const goatRamp = await GoatRamp.deploy(ccVerifier.target);

  await goatRamp.waitForDeployment();

  console.log(`GOATRAMP deployed to ${goatRamp.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
