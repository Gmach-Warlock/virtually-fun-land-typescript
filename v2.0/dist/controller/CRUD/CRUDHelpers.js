import { itemExistsByKeyValue, itemExistsInArray, } from "./itemExists.js";
export function addItemToArray(arr, itm) {
    if (!arr || !itm) {
        console.log(`param missing in addItemToArray`);
        return arr;
    }
    const newArr = [...arr, itm];
    return newArr;
}
export function removeItemFromArray(arr, itm, prop, value) {
    if (!itemExistsInArray(arr, itm) && !itemExistsByKeyValue(arr, prop, value)) {
        console.log(`That non object item does not exist in array in removeItemFromArray`);
        return;
    }
    const newArray = arr.filter((item) => {
        const newItem = item === itm || item[prop] === value;
        return newItem;
    });
    return newArray;
}
export function removeItem(arr, item) {
    if (!arr) {
        console.log(`no item to remove in that array`);
        return arr;
    }
    const newArr = arr.filter((itm) => itm !== item);
    return newArr;
}
//# sourceMappingURL=CRUDHelpers.js.map