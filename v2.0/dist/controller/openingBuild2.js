import { Guest } from "../model/Guest.js";
import { randomizeArr, pullRandomAmount } from "./rngHelpers.js";
import { determineVip, determinePersonalityType } from "./statHelpers.js";
import { theRegulars, randomGuests } from "../assets/vflGuests.js";
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
export function fileGuests() { }
//# sourceMappingURL=openingBuild2.js.map