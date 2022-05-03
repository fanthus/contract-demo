/**
 * @type import('hardhat/config').HardhatUserConfig
 */


require("@nomiclabs/hardhat-ethers")
require('dotenv').config();

task("accounts", "print account").setAction(async() => {
  console.log(process.env.PRIVATE_KEY_0)
  console.log(process.env.PUBLIC_KEY_0)
})


module.exports = {
  solidity: "0.8.8",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/woaYI6yThUOVdkyhinzxu34dF5hTmdfj`,
      accounts: [`${process.env.PRIVATE_KEY_0}`]
    }
  }
};