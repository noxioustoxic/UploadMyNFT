const {deployProxy, upgradeProxy } = require("@openzeppelin/truffle-upgrades");
const Factory = artifacts.require('Factory');
const Erc721 = artifacts.require('Erc721');
//Project Almost tested no need to test futher...

module.exports = async function (deployer, network, accounts) {
  const owner = accounts[0];
  
  // const nft = await deployProxy(Factory ,{
  //    deployer: deployer,
  //    initializer: '__Factory_Init',
   
  //  });

  // const xnft = await Factory.at('0xe3B12f6c618ED81Ca1c736078E22e49906F673a4');
  // const NFTAddress = await xnft.getCollectionAddressByIndex(2);
  // const CI = await Erc721.at(NFTAddress);
  // await CI.name().then(res =>{

  //   console.log(res);
  // });
 




//   //Mint
//   const xnft = await Factory.at('0xe3B12f6c618ED81Ca1c736078E22e49906F673a4');
//   await xnft.createNewCollection('Xobi','XBI','abcd3').then(res => {
//     console.log(res);
// });






//Get Values...
const xnft = await Factory.at('0xe3B12f6c618ED81Ca1c736078E22e49906F673a4');
let x = await xnft.getCollectionAddressByIndex(2);
const nft = await Erc721.at(x);
let v = await nft.tokenURI(5);
  console.log(v);





// //Set Values...
// const xnft = await Factory.at('0xe3B12f6c618ED81Ca1c736078E22e49906F673a4');
// let x = await xnft.getCollectionAddressByIndex(2);
// const nft = await Erc721.at(x);
// const Xarray = [1,2,3,4,5];
// let v = await nft.flashMint('0xe3B12f6c618ED81Ca1c736078E22e49906F673a4',Xarray);
//   console.log(v);



};





