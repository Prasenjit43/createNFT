# createNFT
Steps to deploy and mint NFT

This repository contains Solidity smart contracts and scripts for deploying and minting non-fungible tokens (NFTs) on the Ethereum network.

The `FirstNFT.sol` contract is an ERC721 implementation that represents the "First NFT" (FFT). It allows for the minting of NFTs by incrementing a token ID counter, assigning the token to a recipient address, and setting a unique token URI.

The `deploy.js` script deploys the `FirstNFT` contract using Hardhat, and logs the contract address once deployment is complete.

The `mint_token.js` script interacts with the deployed `FirstNFT` contract by connecting to a provider and signer. It then mints a new NFT by calling the `minting` function of the contract, providing the recipient address and token URL. Transaction details and the NFT balance are logged.

Please make sure to replace the placeholder values in the code before running the scripts.
