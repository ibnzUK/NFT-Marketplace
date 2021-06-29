const { assert } = require('chai');

const NFTMinter = artifacts.require('../src/contracts/NFTMinter.sol');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('NFTMinter', (accounts) => {
  let contract;
  before(async () => {
    contract = await NFTMinter.deployed();
  });

  describe('Checking if conract is deployed to network', async () => {
    it('contract deployed sucessfully', async () => {
      const address = contract.address;
      //checking if contract is deployed and has valid address
      assert.notEqual(address, '' || null || 0x0 || undefined);
    });

    it('contract has matching name', async () => {
      const contractName = await contract.name();
      assert.equal(contractName, 'Minter');
    });

    it('token has symbol', async () => {
      const contractSymbol = await contract.symbol();
      assert.equal(contractSymbol, 'NewNFT');
    });
  });

  describe('Minting of new token', async () => {
    it('creates new token', async () => {
      const result = await contract.mint('FirstToken');
      assert.equal(result.receipt.status, true, 'token minted');
    });

    it('mints tokens from 0x0 address', async () => {
      const result = await contract.mint('SecondToken');
      const event = result.logs[0].args;
      assert.equal(
        event.from,
        '0x0000000000000000000000000000000000000000',
        'from where token is coming'
      );
    });

    it('send tokens to minter', async () => {
      const result = await contract.mint('ThirdToken');
      const event = result.logs[0].args;
      assert.equal(event.to, accounts[0], 'to where it is going');
    });

    it('token total supply is updated', async () => {
      const result = await contract.mint('FourthToken');
      const event = result.logs[0].args;
      assert.equal(event.tokenId.toNumber(), 3, 'total number of tokens is 4');
    });
  });
});
