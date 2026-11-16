export function createNameString(arr) {
    const names = arr
        .map((item) => item.guest.general.name)
        .filter((name) => typeof name === "string");
    if (names.length === 0) {
        return "";
    }
    if (names.length === 1) {
        const str = names[0] ?? "";
        console.log(`Guests: ${str}`);
        return str;
    }
    if (names.length === 2) {
        const first = names[0] ?? "";
        const second = names[1] ?? "";
        const str = `${first} and ${second}`;
        console.log(`Guests: ${str}`);
        return str;
    }
    const allButLast = names.slice(0, -1).join(", ");
    const last = names[names.length - 1] ?? "";
    const str = `${allButLast}, and ${last}`;
    console.log(`Guests: ${str}`);
    return str;
}
export function logLine(queue) {
    const arr = queue.arr;
    const name = queue.attraction.general.name;
    if (!Array.isArray(arr) || name === undefined)
        return;
    if (arr.length === 0) {
        console.log(`There is nobody in line for ${name}`);
        return;
    }
    console.log(`Currently there are ${queue.arr.length} guests in line for ${queue.attraction.general.name}. `);
    const names = arr.map((item) => item.guest.general.name);
    console.log(names);
    let str = "";
    console.log(str);
}
//# sourceMappingURL=logLines.js.map