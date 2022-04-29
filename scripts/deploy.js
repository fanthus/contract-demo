const ethers = require("hardhat").ethers;

async function main() {
  const TestContract = await ethers.getContractFactory("TestContract");
  const testContract = await TestContract.deploy()
  console.log(testContract.address)
}

main()