export function logLine(queue) {
    const arr = queue.arr;
    const name = queue.attraction.general.name;
    if (!Array.isArray(arr) || name === undefined)
        return;
    if (arr.length === 0) {
        console.log(`There is nobody in line for ${name}`);
    }
    console.log(`Currently there are ${queue.arr.length} guests in line for ${queue.attraction.general.name}. `);
}
//# sourceMappingURL=formLines.js.map