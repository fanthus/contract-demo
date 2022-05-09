const ethers = require("hardhat").ethers;
const { ContractFactory } = require("ethers");
const fs = require("fs");

async function main() {
  //1. 部署合约
  //2. 读取合约里面的值
  //3. 把新的值写入合约
  //4. 再读取值进行校验
  const TestContract = await ethers.getContractFactory("TestContract");
  const testContract = await TestContract.deploy()
  console.log(testContract.address)
  let value = await testContract.value();
  console.log(value);
  await testContract.setValue(10);
  value = await testContract.value();
  console.log(value);
}

main()