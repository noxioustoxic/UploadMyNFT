// SPDX-License-Identifier: MIT
//SuperMe
pragma solidity >=0.8.2;

import "./Erc721.sol";
import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Factory is Initializable,OwnableUpgradeable {
    event ERC721TokenCreated(address tokenAddress);

    mapping(uint256 => address) private collections;
    uint256 private counterCollections;
  


     
       function __Factory_Init()public  initializer {
       
        __Ownable_init();
         // transferOwnership(_msgSender());
    }

    function getTotalCollection()external view returns(uint256) {
        return counterCollections;
    }


    function getCollectionAddressByIndex(uint256 _index)
        external
        view
        returns (address)
    {
        return collections[_index];
    }

    function getCollectionNameByIndex(uint256 _index)
        external
        view
        returns (string memory)
    {
        return StandardNFT(collections[_index]).name();
    }


    function createNewCollection(string memory _name, string memory _symbol,string memory _uri) 
        public
        returns (address)
    {
       
        StandardNFT nCollection = new StandardNFT();
        ERC1967Proxy proxy = new ERC1967Proxy(
            address(nCollection),
            abi.encodeWithSelector(
                StandardNFT(address(0)).initialize.selector,
                _name,
                _symbol,
                _msgSender(),
                _uri
            )
        );
        
        counterCollections++;
        collections[counterCollections] = address(proxy);
        emit ERC721TokenCreated(address(proxy));
        return address(proxy);
    }
}
