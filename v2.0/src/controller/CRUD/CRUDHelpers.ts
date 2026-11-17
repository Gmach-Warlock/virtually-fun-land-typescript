import {
  itemExistsByKeyValue,
  itemExistsInArray,
  type TAll,
} from "./itemExists.js";

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
  value: TAll,
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

export function removeItem<type>(arr: type[], item: type) {
  if (!arr) {
    console.log(`no item to remove in that array`);
    return arr;
  }

  const newArr = arr.filter((itm: type) => itm !== item);
  return newArr;
}
