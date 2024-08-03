require("@nomicfoundation/hardhat-toolbox");
const NEXT_PUBLIC_SEPOILA_RPC = "https://polygon-amoy.infura.io/v3/64f7def27620488690aadaac57350d98";
const NEXT_PUBLIC_PRIVATE_KEY = "8c14e0d7c2e38c2d8656a7220a9b0acf96daa2cb3bab05ae5481779f8a4c9ed3";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    amoy: {
      url: NEXT_PUBLIC_SEPOILA_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
     },
    },
};
