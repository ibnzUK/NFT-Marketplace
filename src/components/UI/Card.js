import React from 'react';
import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.Card}>
      <h2>ERC-721 / ERC-1155</h2>

      <h3>
        This is a React, JS, Solidity application, for issue, mint, list and
        sell NFT (ERC-721 & ERC1155) Tokens
        <ul>
          <li>
            Create an NFT marketplace contract that supports ERC721 and ERC1155
          </li>
          <br></br>
          <li>Sellers can list their NFTs on this platform</li>
          <br></br>
          <li>Buyers can preview, and purchase NFTs listed on the platform</li>
        </ul>
      </h3>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h3>
    </div>
  );
};

export default Card;
