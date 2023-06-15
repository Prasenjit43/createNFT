const { ethers } = require("ethers");
const firstNFTArtifact = require("../artifacts/contracts/FirstNFT.sol/FirstNFT.json");

const provider = new ethers.providers.JsonRpcProvider(
    process.env.GOERLI_TESTNET
);
const wallet = new hre.ethers.Wallet(process.env.WALLET_PRIVATE_KEY);
const signer = wallet.connect(provider);
const FIRST_NFT_ADDRESS ="XXXXXXXXXXXXXXXX"; /* Address of deployed First Token contract */

const firstNft = new ethers.Contract(
    FIRST_NFT_ADDRESS,
    firstNFTArtifact.abi,
    provider
);

const mintNFTToken = async (_toAddress, _tokenURL) => {
    const txn = await firstNft.connect(signer).minting(_toAddress, _tokenURL);
    await txn.wait();
    console.log("Transaction : ", txn);
    const balance = await firstNft.connect(signer).balanceOf(_toAddress);
    console.log("Balance :", balance);
};

async function main() {
    console.log("/********* Minting NFT Token *************/");
    const toAddress = "XXXXXXXXXXXXXX";
    const tokenURL = "XXXXXXXXXXXXXX";
    await mintNFTToken(toAddress, tokenURL);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
