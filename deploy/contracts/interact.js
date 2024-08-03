//Keys
const API_KEY = '0a17be4969ed49c295ead2b7a3e0adfe';
const PRIVATE_KEY = '8c14e0d7c2e38c2d8656a7220a9b0acf96daa2cb3bab05ae5481779f8a4c9ed3';
const CONTRACT_ADDRESS = "0x007D41E2b429A0DccD99070047162a806511Da78";
const polygonAmoyRpc = "https://polygon-amoy.infura.io/v3/0a17be4969ed49c295ead2b7a3e0adfe";

// Module imports
import { ethers } from "ethers";

const contract = require("../contractABI/nft.json");
const { JsonRpcProvider, Network } = require("ethers");

// Creating new Network Instance with network name and chain id
const newNetwork = new Network("polygonAmoy", BigInt(80002));

// provider = Metamask/Alchemy/Infura
const provider = new JsonRpcProvider(polygonAmoyRpc, newNetwork , {staticNetwork: true});

// signer = Basically me or my Wallet
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// contract instance
export const nftContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
const nftUri = await nftContract.baseUri();
await nftUri;
// console.log(nftUri)
async function main() {
    const message = await nftContract.baseUri();
    nftContract.flipSaleState();
    console.log("sale is fliped")
    // console.log(message);
}

// main()
// .then(() => process.exit(0))
//     .catch(error => {
//     console.error(error);
//     process.exit(1);
// });

export default nftUri;