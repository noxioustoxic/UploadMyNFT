// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";

contract StandardNFT is Initializable, ERC721Upgradeable, ERC721EnumerableUpgradeable, OwnableUpgradeable {
    using CountersUpgradeable for CountersUpgradeable.Counter;

    CountersUpgradeable.Counter private _tokenIdCounter;

 uint256 public totalMinted;
    string public uri;
    event SetURI(string _uri);





    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}
     function initialize(
        string memory _name,
        string memory _symbol,
        address _owner,
        string memory _uri
    ) public initializer {
        __ERC721_init(_name, _symbol);
        __ERC721Enumerable_init();
        __Ownable_init();
          setURI(_uri);
        transferOwnership(_owner);
         _tokenIdCounter.increment();
    }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
      function _baseURI() internal view virtual override returns (string memory) {
        return uri;
    }

    function setURI(string memory _uri) public onlyOwner {
        uri = _uri;
        emit SetURI(_uri);
    }
     function flashMint(address _to, uint256[] memory _ids) external onlyOwner {
        uint256 length = _ids.length;
        // require(totalMinted + length <= TOTAL_PIECES, "you are minting excess amount");
        for (uint256 i = 0; i < length; i++) {
            _mint(_to, _ids[i]);
            _tokenIdCounter.increment();
        }
    }
}