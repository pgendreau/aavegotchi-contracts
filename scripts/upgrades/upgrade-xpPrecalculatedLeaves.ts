import { run } from "hardhat";
import {
  convertFacetAndSelectorsToString,
  DeployUpgradeTaskArgs,
  FacetsAndAddSelectors,
} from "../../tasks/deployUpgrade";

import { maticDiamondAddress } from "../helperFunctions";

export async function upgrade() {
  const diamondUpgrader = "0x35fe3df776474a7b24b3b1ec6e745a830fdad351";

  const facets: FacetsAndAddSelectors[] = [
    {
      facetName: "MerkleDropFacet",
      addSelectors: [
        `function claimXPDropWithLeaf(bytes32 _propId,bytes32 _leaf, uint256[] calldata _gotchiId,bytes32[] calldata _proof,uint256[] calldata _onlyGotchis) external`,
        `function batchClaimXPDropWithLeaves(bytes32 _propId,bytes32[] calldata _leafs,address[] calldata _claimers,uint256[][] calldata _gotchiIds,bytes32[][] calldata _proofs,uint256[][] calldata _onlyGotchis) external`,
        `function batchClaimMultipleXPDropsWithLeaves(bytes32[] calldata _propIds,bytes32[] calldata _leafs,uint256[][] calldata _gotchiIds,bytes32[][] calldata _proofs,uint256[][] calldata _onlyGotchis) external `,
      ],
      removeSelectors: [],
    },
  ];

  const joined = convertFacetAndSelectorsToString(facets);

  const args: DeployUpgradeTaskArgs = {
    diamondUpgrader: diamondUpgrader,
    diamondAddress: maticDiamondAddress,
    facetsAndAddSelectors: joined,
    useLedger: true,
    useMultisig: false,
  };

  await run("deployUpgrade", args);
}

if (require.main === module) {
  upgrade()
    .then(() => process.exit(0))
    // .then(() => console.log('upgrade completed') /* process.exit(0) */)
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
