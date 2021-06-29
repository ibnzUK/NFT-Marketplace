// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC721.sol";

contract NFTMinter is ERC721 {
    string[] public meta;
    mapping(string => bool) _metaExists;


    constructor() ERC721("Minter", "NewNFT") {}
    
    function mint(string memory _newMeta) public {
        meta.push(_newMeta);
        uint _id = meta.length - 1;
        
        _mint(msg.sender, _id);
        _metaExists[_newMeta] = true;

    }

}
