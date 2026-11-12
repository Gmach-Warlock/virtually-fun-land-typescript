import { createGuest, createOpeningCrowdNames } from "./guestFactory.js";
function createGroup(arr) {
    const group = arr.map((name) => {
        createGuest(name);
    });
    return group;
}
function createOpeningCrowd(openingCrowd = createOpeningCrowdNames()) {
    const regulars = createGroup(openingCrowd.regulars);
    const randoms = createGroup(openingCrowd.randoms);
    return { regulars, randoms };
}
export function seedOpeningCrowd(openingCrowd = createOpeningCrowdNames()) {
    const crowd = createOpeningCrowd(openingCrowd);
}
//# sourceMappingURL=openingGuests.js.map