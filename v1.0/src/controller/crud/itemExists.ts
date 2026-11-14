import type { AllType } from "../../types/basic/basicTypes.js";

export function itemExistsInArray<type>(arr: type[], itm: type) {
  if (!arr.some((item) => item === itm)) {
    console.log("No item in that array in itemExistsInArray");
    return false;
  }
  return true;
}

export function itemExistsByKeyValue<Type extends any, Key extends keyof Type>(
  arr: Type[],
  prop: Key,
  value: AllType,
) {
  if (!arr.some((itm) => itm[prop] == value)) {
    console.log("No item in that array in itemExistsInArray");
    return false;
  }
  return true;
}
