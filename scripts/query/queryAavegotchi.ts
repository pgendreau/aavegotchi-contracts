import { ethers } from "hardhat";
import {
  AavegotchiFacet,
  AavegotchiGameFacet,
  SvgFacet,
} from "../../typechain";

async function queryAavegotchiAtBlock() {
  const signer = await (await ethers.getSigners())[0];

  const diamondAddress = "0xf81FFb9E2a72574d3C4Cf4E293D4Fec4A708F2B1";
  const tokenId = 1;

  const diamond = (await ethers.getContractAt(
    "contracts/Aavegotchi/facets/AavegotchiFacet.sol:AavegotchiFacet",
    diamondAddress,
    signer
  )) as AavegotchiFacet;

  const gameFacet = (await ethers.getContractAt(
    "contracts/Aavegotchi/facets/AavegotchiGameFacet.sol:AavegotchiGameFacet",
    diamondAddress,
    signer
  )) as AavegotchiGameFacet;

  const svgFacet = (await ethers.getContractAt(
    "contracts/Aavegotchi/facets/SvgFacet.sol:SvgFacet",
    diamondAddress,
    signer
  )) as SvgFacet;

  try {
    const aavegotchis = await diamond.getAavegotchi(tokenId);

    const svg = await svgFacet.getAavegotchiSvg(tokenId);

    console.log(svg);

    // const portal = await gameFacet.portalAavegotchiTraits(tokenId);

    // console.log(portal);

    // console.log(aavegotchis);
  } catch (error) {
    console.error("Error querying Aavegotchi contract:", error);
    throw error;
  }
}

// Example usage
async function main() {
  const BLOCK_NUMBER = 4610;

  try {
    await queryAavegotchiAtBlock();
  } catch (error) {
    console.error("Failed to query Aavegotchis:", error);
  }
}

main();
