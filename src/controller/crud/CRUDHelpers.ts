import type { AllType } from "../../types/basic/basicTypes.js";
import { itemExistsByKeyValue, itemExistsInArray } from "./itemExists.js";

export function addItemToArray<type>(arr: type[], itm: type) {
  if (!arr || !itm) {
    console.log(`param missing in addItemToArray`);
    return arr;
  }
  const newArr = [...arr, itm];
  return newArr;
}

export function removeItemFromArray<type>(
  arr: type[],
  itm: type,
  prop: keyof type,
  value: AllType,
) {
  if (!itemExistsInArray(arr, itm) && !itemExistsByKeyValue(arr, prop, value)) {
    console.log(
      `That non object item does not exist in array in removeItemFromArray`,
    );
    return;
  }
  const newArray = arr.filter((item) => {
    const newItem = item === itm || item[prop] === value;
    return newItem;
  });
  return newArray;
}
