// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import {Aavegotchi, Modifiers} from "../libraries/LibAppStorage.sol";
import {LibAavegotchi} from "../libraries/LibAavegotchi.sol";
import {LibItems} from "../libraries/LibItems.sol";
import {LibERC721} from "../../shared/libraries/LibERC721.sol";
import {LibERC1155} from "../../shared/libraries/LibERC1155.sol";
import {INFTBridge} from "../../shared/interfaces/INFTBridge.sol";
import {LibERC20} from "../../shared/libraries/LibERC20.sol";
import {IERC20} from "../../shared/interfaces/IERC20.sol";
import "../WearableDiamond/interfaces/IEventHandlerFacet.sol";

contract PolygonXGeistBridgeFacet is Modifiers {
    event GeistBridgesSet(address _gotchiBridge, address _itemBridge);

    function bridgeGotchi(address _receiver, uint256 _tokenId, uint256 _msgGasLimit, address _connector) external payable {
        require(_tokenId == 6018, "Testing");

        Aavegotchi memory _aavegotchi = s.aavegotchis[_tokenId];
        // force unstake from escrow
        // if(_aavegotchi.collateralType != address(0)) {
        //     uint256 currentStake = IERC20(_aavegotchi.collateralType).balanceOf(_aavegotchi.escrow);
        //     LibERC20.transferFrom(_aavegotchi.collateralType, _aavegotchi.escrow, msg.sender, currentStake);
        // }

        bytes memory _metadata = abi.encode(_aavegotchi);
        INFTBridge(s.gotchiGeistBridge).bridge(_receiver, msg.sender, _tokenId, 1, _msgGasLimit, _connector, _metadata, new bytes(0));
        for (uint slot; slot < _aavegotchi.equippedWearables.length; slot++) {
            uint wearableId = _aavegotchi.equippedWearables[slot];
            if (wearableId != 0) {
                delete s.aavegotchis[_tokenId].equippedWearables[slot];
                LibItems.removeFromParent(address(this), _tokenId, wearableId, 1);
                LibItems.addToOwner(s.itemGeistBridge, wearableId, 1);

                if (block.chainid == 137) {
                    //wearable diamond is not set on Base Sepolia
                    IEventHandlerFacet(s.wearableDiamond).emitTransferSingleEvent(msg.sender, address(this), s.itemGeistBridge, wearableId, 1);
                }
                emit LibERC1155.TransferFromParent(address(this), _tokenId, wearableId, 1);
            }
        }
    }

    function getMinFees(address connector_, uint256 msgGasLimit_, uint256 payloadSize_) external view returns (uint256) {
        return INFTBridge(s.gotchiGeistBridge).getMinFees(connector_, msgGasLimit_, payloadSize_);
    }

    function getGotchiBridge() external view returns (address) {
        return s.gotchiGeistBridge;
    }

    function getItemBridge() external view returns (address) {
        return s.itemGeistBridge;
    }

    // struct GotchiBridgingParams {
    //     address receiver;
    //     uint256 tokenId;
    //     uint256 msgGasLimit;
    // }

    // function bridgeGotchis(GotchiBridgingParams[] calldata bridgingParams, address _connector) external payable {
    //     require(bridgingParams.length <= 5, "PolygonXGeistBridgeFacet: length should be lower than 5");
    //     for (uint256 i = 0; i < bridgingParams.length; i++) {
    //         _bridgeGotchi(bridgingParams[i].receiver, bridgingParams[i].tokenId, bridgingParams[i].msgGasLimit, _connector);
    //     }
    // }

    // function _bridgeGotchi(address _receiver, uint256 _tokenId, uint256 _msgGasLimit, address _connector) internal {
    //     Aavegotchi memory _aavegotchi = s.aavegotchis[_tokenId];
    //     // force unstake from escrow
    //     // if (_aavegotchi.collateralType != address(0)) {
    //     //     uint256 currentStake = IERC20(_aavegotchi.collateralType).balanceOf(_aavegotchi.escrow);
    //     //     LibERC20.transferFrom(_aavegotchi.collateralType, _aavegotchi.escrow, msg.sender, currentStake);
    //     // }

    //     bytes memory _metadata = abi.encode(_aavegotchi);
    //     INFTBridge(s.gotchiGeistBridge).bridge(_receiver, msg.sender, _tokenId, 1, _msgGasLimit, _connector, _metadata, new bytes(0));
    //     for (uint slot; slot < _aavegotchi.equippedWearables.length; slot++) {
    //         uint wearableId = _aavegotchi.equippedWearables[slot];
    //         if (wearableId != 0) {
    //             delete s.aavegotchis[_tokenId].equippedWearables[slot];
    //             LibItems.removeFromParent(address(this), _tokenId, wearableId, 1);
    //             LibItems.addToOwner(s.itemGeistBridge, wearableId, 1);
    //             IEventHandlerFacet(s.wearableDiamond).emitTransferSingleEvent(msg.sender, address(this), s.itemGeistBridge, wearableId, 1);
    //             emit LibERC1155.TransferFromParent(address(this), _tokenId, wearableId, 1);
    //         }
    //     }
    // }

    ///@notice Sets the metadata of the gotchi when it is coming back from Geist.
    ///@param _tokenId The token id of the gotchi
    ///@param _metadata The metadata of the gotchi
    function setMetadata(uint _tokenId, bytes memory _metadata) external onlyGotchiGeistBridge {
        Aavegotchi memory _aavegotchi = abi.decode(_metadata, (Aavegotchi));
        s.aavegotchis[_tokenId] = _aavegotchi;

        for (uint slot; slot < _aavegotchi.equippedWearables.length; slot++) {
            if (_aavegotchi.equippedWearables[slot] != 0) {
                uint wearableId = _aavegotchi.equippedWearables[slot];
                LibItems.removeFromOwner(s.itemGeistBridge, wearableId, 1);
                IEventHandlerFacet(s.wearableDiamond).emitTransferSingleEvent(msg.sender, s.itemGeistBridge, address(this), wearableId, 1);
                LibItems.addToParent(address(this), _tokenId, wearableId, 1);
                emit LibERC1155.TransferToParent(address(this), _tokenId, wearableId, 1);
            }
        }
    }

    // function bridgeItem(address _receiver, uint256 _tokenId, uint256 _amount, uint256 _msgGasLimit, address _connector) external payable {
    //     INFTBridge(s.itemGeistBridge).bridge(_receiver, msg.sender, _tokenId, _amount, _msgGasLimit, _connector, new bytes(0), new bytes(0));
    // }

    // struct ItemBridgingParams {
    //     address receiver;
    //     uint256 tokenId;
    //     uint256 amount;
    //     uint256 msgGasLimit;
    // }

    // function bridgeItems(ItemBridgingParams[] calldata bridgingParams, address _connector) external payable {
    //     require(bridgingParams.length <= 5, "PolygonXGeistBridgeFacet: length should be lower than 5");
    //     for (uint256 i = 0; i < bridgingParams.length; i++) {
    //         _bridgeItem(bridgingParams[i].receiver, bridgingParams[i].tokenId, bridgingParams[i].amount, bridgingParams[i].msgGasLimit, _connector);
    //     }
    // }

    // function _bridgeItem(address _receiver, uint256 _tokenId, uint256 _amount, uint256 _msgGasLimit, address _connector) internal {
    //     INFTBridge(s.itemGeistBridge).bridge(_receiver, msg.sender, _tokenId, _amount, _msgGasLimit, _connector, new bytes(0), new bytes(0));
    // }

    function setBridges(address _gotchiBridge, address _itemBridge) external onlyDaoOrOwner {
        s.gotchiGeistBridge = _gotchiBridge;
        s.itemGeistBridge = _itemBridge;
        emit GeistBridgesSet(_gotchiBridge, _itemBridge);
    }
}
