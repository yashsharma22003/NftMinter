// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract nft is ERC721, Ownable {
    using Strings for uint256;

    uint256 public constant MAX_TOKENS = 10000;
    uint256 private constant TOKENS_RESERVED = 5; 
    uint public price = 80000000000000000;
    uint public constant MAX_MINT_PER_TX = 10;

    bool public isSaleActive;
    uint public totalSupply;
    mapping(address => uint256) private mintedPerWallet;

    string public baseUri;
    string public baseExtension = ".json";

    constructor() ERC721("CODE", "CO") Ownable(msg.sender) {
        // Base IPFS URI of the NFTs
        baseUri = "https://gateway.pinata.cloud/ipfs/QmR4WLMqX2wqo4WjCYfTVifUCDcEqG4Wf6md8uadtBfv5M";
        for (uint256 i=1; i <= TOKENS_RESERVED; i++){
            _safeMint(msg.sender, i);
        }
        totalSupply = TOKENS_RESERVED;
    }

    function mint(uint256 _numTokens) external payable {
        require (isSaleActive, "The Sale is paused");
        require(_numTokens <= MAX_MINT_PER_TX, "You can only mint a maximum of 10 NFTs per transaction.");
        require(mintedPerWallet[msg.sender] + _numTokens <= 10,"You can only mint 10 per wallet");
        uint256 curTotalSupply = totalSupply;
        require(curTotalSupply + _numTokens <= MAX_TOKENS, "Exceeds `MAX_TOKENS`");
        require(_numTokens * price <= msg.value, "Insufficient funds. you need more ETH!");

        for(uint256 i = 1; i <= _numTokens; i++) {
            _safeMint(msg.sender, curTotalSupply + i);
        }
        mintedPerWallet[msg.sender] += _numTokens;
        totalSupply += _numTokens;
    }

    function flipSaleState() external onlyOwner {
        isSaleActive = !isSaleActive;
    }

    function setBaseURI(string memory _baseUri) external onlyOwner {
        baseUri=_baseUri;
    }

    function withdrawAll() external payable onlyOwner {
        uint256 balance = address(this).balance;
        (bool transfer, ) = payable(owner()).call{value: balance} ("0x487b23F9c31d9F0a044A23a87165c26dF58eaff3");
        require(transfer,"Transfer failed");
    }



    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        address valid= ownerOf(tokenId);
        require(
            valid != address(0),
            "ERC721Metadata: URI query for nonexistent token"
        );
        string memory currentBaseURI = _baseURI();
        return bytes(currentBaseURI).length > 0
         ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        :"";
    }

    //Internal Function
    function _baseURI() internal view virtual override returns (string memory) {
        return baseUri;
    }

    function totalMinted() public view returns (uint256) {
        address add=msg.sender;
        uint256 count=mintedPerWallet[add];
        return(count);
    }
}