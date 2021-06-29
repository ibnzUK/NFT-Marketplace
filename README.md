![Preview](src/assets/screenshot.png)




This is a React, JS, Solidity application, for issue, mint, list and sell NFT (ERC-721 & ERC1155) Tokens 


# Idea and functionalities 

- Create an NFT marketplace contract that supports ERC721 and ERC1155

- Sellers can list their NFTs on this platform

- Buyers can preview, and purchase NFTs listed on the platform


## Community coders, please commit

Feel free to add extra functions or improvements, This helps me to familiarise myself with source control and open source project managing. By contributing you also help to build yet another open-source tool on TRON Network. 

-----





## Running instructions

- Copy project to your directory ( git clone https://github.com/ibnzUK/NFT-Marketplace )
- navigate to _NFT-Marketplace_ project directory
- make sure you have node.js installed on your machine
- install project packages (npm install)
- start a project (npm run start)





## Changes in V 0.01

- Added Skeleton

## Changes in V 0.02

- Connected to Metamask
- Added ERC721 Contract
- Started NFTMinter Contract
- Added truffle-flattener and flattened openZeppelin contracts
- Contracts and Solc compiler updated to version: "^0.8" 
- Added Tests and Migration 

# Tests


  Contract: NFTMinter
    Checking if conract is deployed to network
      ✓ contract deployed sucessfully
      ✓ contract has matching name (148ms)
      ✓ token has symbol (147ms)
    Minting of new token
      ✓ creates new token (351ms)
      ✓ mints tokens from 0x0 address (400ms)
      ✓ send tokens to minter (330ms)
      ✓ token total supply is updated (558ms)


  7 passing (3s)







