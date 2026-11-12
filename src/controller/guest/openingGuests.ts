import type { CrowdNames } from "../../types/guestInterface.js";
import { createGuest, createOpeningCrowdNames } from "./guestFactory.js";

function createGroup(arr: string[]) {
  const group = arr.map((name) => {
    createGuest(name);
  });
  return group;
}

function createOpeningCrowd(
  openingCrowd: CrowdNames = createOpeningCrowdNames(),
) {
  const regulars = createGroup(openingCrowd.regulars);
  const randoms = createGroup(openingCrowd.randoms);
  return { regulars, randoms };
}

export function seedOpeningCrowd(
  openingCrowd: CrowdNames = createOpeningCrowdNames(),
) {
  const crowd = createOpeningCrowd(openingCrowd);
}
