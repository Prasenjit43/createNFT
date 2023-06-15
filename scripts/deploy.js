const hre = require("hardhat");
const ethers = require('ethers');

async function main() {
  const FirstNFT = await hre.ethers.getContractFactory("FirstNFT");
  const firstNFT = await FirstNFT.deploy();
  await firstNFT.deployed();
  console.log("Constract Address :", firstNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});