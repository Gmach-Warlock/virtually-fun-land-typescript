import { Guest } from "../../model/Guest.js";
import { randomizeArr, pullRandomAmount } from "./rngHelpers.js";
import { determineVip, determinePersonalityType } from "./generateStats.js";
import { theRegulars, randomGuests } from "../../assets/vflGuests.js";
import type { IGuest, TPersonality } from "../../types/IGuest.js";
import { rng } from "./rngHelpers.js";
import type { IPark } from "../../types/IGame.js";
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

export function getInLine(guest: IGuest, park: IPark): void {
  console.log(
    `${guest.general.name} is a ${guest.general.pType} and wants to get in line!`,
  );
  const randomIndex = rng(3);
  if (!randomIndex) return;
  /*   const lookup: Record<TPersonality, () => void> = {
    rider: () => park.rides[randomIndex]

  } */
}

export function fileGuests() {
  const guests = buildGuests();
  if (!guests) return;
  guests.forEach((guest: IGuest) => {
    if (guest.general.pType === "wanderer") {
      console.log(
        `${guest.general.name} is roaming around enjoying the sites!`,
      );
    }
    getInLine(guest, park);
  });
}
