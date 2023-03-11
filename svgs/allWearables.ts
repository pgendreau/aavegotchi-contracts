import { SleeveObject, ItemTypeInputNew } from "../scripts/itemTypeHelpers";
import {
  bodyWearable,
  BodyWearableOutput,
  wearable,
} from "../scripts/svgHelperFunctions";
import { itemTypes } from "../data/itemTypes/itemTypes";
import { allSleeves } from "./wearables";

export function getWearables() {
  const wearables: string[] = [];
  const sleeves: SleeveObject[] = [];

  itemTypes.forEach((itemType: ItemTypeInputNew) => {
    const wearableName = itemType.name.split(" ").join("");

    if (
      itemType.slotPositions === "body" &&
      allSleeves.includes(itemType.svgId)
    ) {
      const output: BodyWearableOutput = bodyWearable(
        `${itemType.svgId}_${wearableName}`,
        "svgItems"
      );
      wearables.push(output.wearable);
      sleeves.push(output.sleeves);
    } else {
      wearables.push(wearable(`${itemType.svgId}_${wearableName}`, "svgItems"));
    }
  });

  return { wearables: wearables, sleeves: sleeves };
}
