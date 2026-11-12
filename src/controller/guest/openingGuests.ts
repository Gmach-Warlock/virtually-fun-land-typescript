import { randomGuests, theRegulars } from "../../assets/guestPools.js";
import { pullRandomAmount, randomizeArr } from "../rng/rngHelpers.js";
import type { CrowdNames } from "../../types/guestInterface.js";
import { Guest } from "../../model/guest/Guest.js";
import { rng } from "../rng/rngHelpers.js";

export function createOpeningCrowdNames() {
  const regulars = randomizeArr(theRegulars);
  const randoms = pullRandomAmount(randomGuests);
  console.log("createOpeningCrowd", regulars, randoms);
  return {
    regulars,
    randoms,
  };
}

export function determinePersonalityType() {
  const value = Math.random();
  if (!value) return "WTF";
  if (value > 0.6) return "rider";
  if (value > 0.3) return "gamer";
  if (value > 0.1) return "watcher";
  return "wanderer";
}

function createOpeningCrowd(nameObj: CrowdNames) {
  const regulars = nameObj.regulars.map((name) => {
    const personality = determinePersonalityType();
    return new Guest(name);
  });

  const randoms = nameObj.randoms.map((name) => {
    return new Guest(name);
  });
}

export function seedOpeningCrowd(OpeningCrowd: CrowdNames) {}
