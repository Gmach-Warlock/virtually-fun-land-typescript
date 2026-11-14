export function rng(possible) {
    if (possible < 0) {
        console.log("Please enter a positive integer");
        return;
    }
    return Math.floor(Math.random() * possible);
}
export function randomizeArr(arr, numOfItems = arr.length) {
    const copy = [...arr];
    const random = [];
    for (let i = 0; i < numOfItems; i++) {
        if (copy.length < 0)
            break;
        const index = rng(copy.length);
        if (index === undefined || index < 0)
            return;
        const [itemToRemove] = copy.splice(index, 1);
        if (!itemToRemove)
            return;
        random.push(itemToRemove);
    }
    return random;
}
export function pullRandomAmount(arr) {
    const randomAmount = rng(arr.length);
    if (!randomAmount)
        return;
    const newArray = randomizeArr(arr, randomAmount);
    if (!newArray)
        return;
    return newArray;
}
//# sourceMappingURL=rngHelpers.js.map