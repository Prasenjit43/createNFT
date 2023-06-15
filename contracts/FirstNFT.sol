// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract FirstNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;

    constructor() ERC721("First NFT", "FFT") {}

    function minting(address _recepient, string memory _tokenURI) external {
        uint newItemId = _tokenIds.current();
        _mint(_recepient, newItemId);
        _setTokenURI(newItemId, _tokenURI);
        _tokenIds.increment();
    }
}
