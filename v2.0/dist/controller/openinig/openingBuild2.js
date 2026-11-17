import { Guest } from "../../model/Guest.js";
import { randomizeArr, pullRandomAmount } from "../rng/rngHelpers.js";
import { determineVip, determinePersonalityType, } from "../rng/generateStats.js";
import { randomGuests } from "../../assets/vflGuests.js";
import { theRegulars } from "../../assets/vflRegulars.js";
import { rng } from "../rng/rngHelpers.js";
import { park } from "../../app.js";
export function buildGuests() {
    const regulars = randomizeArr(theRegulars) ?? [];
    const randoms = pullRandomAmount(randomGuests) ?? [];
    const guestNames = [...regulars, ...randoms];
    const guests = guestNames.map((guestName) => {
        const pType = determinePersonalityType();
        const isViP = determineVip();
        return new Guest(guestName, pType ?? "rider", isViP ?? false);
    });
    return guests;
}
function pickAreaType(guest) {
    const type = guest.general.pType;
    const arr = ["rides", "games", "shows"];
    const randomIndex = rng(3);
    if (!type || !arr || randomIndex === undefined || randomIndex === null) {
        console.log(`failed 1`);
        return;
    }
    const lookup = {
        rider: arr[0] ?? "rides",
        gamer: arr[1] ?? "games",
        watcher: arr[2] ?? "shows",
        wanderer: arr[randomIndex] ?? "shows",
    };
    const area = lookup[type];
    if (area === undefined || area === null) {
        console.log("Error getting area");
        return;
    }
    return area;
}
export function selectAttraction(guest, park) {
    const area = pickAreaType(guest);
    if (area === undefined || area === null) {
        console.log("failed 1");
        return;
    }
    const attractions = park.arrays[area];
    if (!Array.isArray(attractions) || attractions.length === 0) {
        console.log("no attractions found in this area");
        return;
    }
    const randomIndex2 = rng(attractions.length);
    if (randomIndex2 === undefined || randomIndex2 === null)
        return;
    const selected = attractions[randomIndex2];
    if (selected === null || selected === undefined) {
        console.log("failed 2");
    }
    return selected;
}
//# sourceMappingURL=openingBuild2.js.map