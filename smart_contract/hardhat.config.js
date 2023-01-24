require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/qqJgleeUDGt6vpIfeJk3xD3prhviPoop',
      accounts: ['b870b65ab8fa4b36f7daaa9b9fad013431c7a11e1da3a852e10fa450abb6d4e9'],
    },
  },
};