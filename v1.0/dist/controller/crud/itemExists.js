export function itemExistsInArray(arr, itm) {
    if (!arr.some((item) => item === itm)) {
        console.log("No item in that array in itemExistsInArray");
        return false;
    }
    return true;
}
export function itemExistsByKeyValue(arr, prop, value) {
    if (!arr.some((itm) => itm[prop] == value)) {
        console.log("No item in that array in itemExistsInArray");
        return false;
    }
    return true;
}
//# sourceMappingURL=itemExists.js.map