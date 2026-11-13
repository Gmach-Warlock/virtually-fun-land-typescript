import { Guest } from "../../model/guest/Guest.js";
import { GuestStatus } from "../../model/guest/GuestStatus.js";
import { GuestPersonality } from "../../model/guest/GuestPersonality.js";
import {
  determinePersonalityType,
  determineStartStatus,
} from "../rng/statHelpers.js";
import { randomizeArr, pullRandomAmount } from "../rng/rngHelpers.js";
import { theRegulars, randomGuests } from "../../assets/guestPools.js";
import type { GuestObj } from "../../types/guestInterface.js";
import { vflGuestList } from "../../model/guest/GuestList.js";
import { addToInstance } from "../crud/instanceCRUDhelp.js";

export function createOpeningCrowdNames() {
  const regulars = randomizeArr(theRegulars) ?? [];
  const randoms = pullRandomAmount(randomGuests) ?? [];
  return {
    regulars,
    randoms,
  };
}

export function createGuest(name: string) {
  const personality = determinePersonalityType();
  const startStatus = determineStartStatus();
  const isVip = startStatus === "VIP" ? true : false;
  const newGuest = new Guest(name);
  const newGStatus = new GuestStatus(newGuest, isVip);
  const newGPersonality = new GuestPersonality(
    newGuest,
    personality ?? "rider",
  );
  newGuest.personality = newGPersonality;
  newGuest.status = newGStatus;
  return {
    guest: newGuest,
    status: newGStatus,
    personality: newGPersonality,
  };
}

export function createOpeningGuests() {
  const crowdNameObj = createOpeningCrowdNames();
  const regulars = crowdNameObj.regulars.map((guestName) => {
    return createGuest(guestName);
  });
  const randoms = crowdNameObj.regulars.map((guestName) => {
    return createGuest(guestName);
  });
  return { regulars, randoms };
}

export function hydrateGuest(guestObj: GuestObj) {
  vflGuestList.add(guestObj.guest);
}
