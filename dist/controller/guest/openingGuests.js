import { randomGuests, theRegulars } from "../../assets/guests.js";
import { pullRandomAmount, randomizeArr } from "../rng/rngHelpers.js";
export function createOpeningCrowd() {
    const regulars = randomizeArr(theRegulars);
    const randoms = pullRandomAmount(randomGuests);
    console.log("createOpeningCrowd", regulars, randoms);
    return {
        regulars,
        randoms,
    };
}
//# sourceMappingURL=openingGuests.js.map