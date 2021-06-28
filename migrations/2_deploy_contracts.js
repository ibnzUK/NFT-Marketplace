const Migrations = artifacts.require("NFTMinter.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

