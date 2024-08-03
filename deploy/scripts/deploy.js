const hre = require("hardhat");

async function main(){
    const Nft = await hre.ethers.getContractFactory("nft");
    const nft = await Nft.deploy();

    await nft.deployed();
    console.log(`nft : ${nft.address}` );
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});