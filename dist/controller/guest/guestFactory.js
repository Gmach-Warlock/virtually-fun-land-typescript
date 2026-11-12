import { Guest } from "../../model/guest/Guest.js";
import { GuestStatus } from "../../model/guest/GuestStatus.js";
import { GuestPersonality } from "../../model/guest/GuestPersonality.js";
import { determinePersonalityType, determineStartStatus, } from "../rng/statHelpers.js";
import { randomizeArr, pullRandomAmount } from "../rng/rngHelpers.js";
import { theRegulars, randomGuests } from "../../assets/guestPools.js";
export function createOpeningCrowdNames() {
    const regulars = randomizeArr(theRegulars) ?? [];
    const randoms = pullRandomAmount(randomGuests) ?? [];
    console.log("createOpeningCrowd", regulars, randoms);
    return {
        regulars,
        randoms,
    };
}
export function createGuest(name) {
    const personality = determinePersonalityType();
    const startStatus = determineStartStatus();
    const isVip = startStatus === "VIP" ? true : false;
    const newGuest = new Guest(name);
    const newGStatus = new GuestStatus(newGuest, isVip);
    const newGPersonalit = new GuestPersonality(newGuest, personality ?? "rider");
    return {
        guest: newGuest,
        status: newGStatus,
        personality: newGPersonalit,
    };
}
//# sourceMappingURL=guestFactory.js.map