const {deployProxy, upgradeProxy } = require("@openzeppelin/truffle-upgrades");
const Factory = artifacts.require('Factory');
const Erc721 = artifacts.require('Erc721');



module.exports = async function (deployer, network, accounts) {
  const owner = accounts[0];
  
  const nft = await deployProxy(Factory ,{
     deployer: deployer,
     initializer: '__Factory_Init',
   });
   console.log('testing deploying');
  }







// const xnft = await Factory.at('0xbc62d4715eE9b3F86a44DacA9630cf4D4D32cD5A');
// await xnft.createNewCollection('zohaibX','xobi').then(res => {

//   console.log(res);
// });
// };



// const xnft = await Factory.at('0xbc62d4715eE9b3F86a44DacA9630cf4D4D32cD5A');
//   const NFTAddress = await xnft.getCollectionAddressByIndex(2);
//   const CI = await Erc721.at(NFTAddress);
//   await CI.name().then(res =>{

//     console.log(res);
//   });
