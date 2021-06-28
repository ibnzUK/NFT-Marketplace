const { assert } = require('chai');

const NFTMinter = artifacts.require('../src/contracts/NFTMinter.sol');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('NFTMinter', (accounts) => {
    let contract

  describe('Checking if conract is deployed to network', async () => {
    it('contract deployed sucessfully', async () => {

      contract = await NFTMinter.deployed() 
       const address = contract.address
       console.log(address);
       assert.notEqual(address, '')
    });
  });
});
