export type TAll = string | number | boolean | object;

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
  value: TAll,
) {
  if (!arr.some((itm) => itm[prop] == value)) {
    console.log("No item in that array in itemExistsInArray");
    return false;
  }
  return true;
}
