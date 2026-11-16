import { Guest } from "../../model/Guest.js";
import { randomizeArr, pullRandomAmount } from "./rngHelpers.js";
import { determineVip, determinePersonalityType } from "./generateStats.js";
import { theRegulars, randomGuests } from "../../assets/vflGuests.js";
import type { GuestInstance, Personality } from "../../types/guestTypeDefs.js";
import { rng } from "./rngHelpers.js";
import type { ParkInstance } from "../../types/gameTypeDefs.js";
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

function pickAreaType(guest: GuestInstance) {
  const type: Personality = guest.general.pType;
  const arr = ["rides", "games", "shows"];
  const randomIndex = rng(3);
  if (!type || !arr || randomIndex === undefined || randomIndex === null) {
    console.log(`failed 1`);
    return;
  }
  const lookup: Record<Personality, string> = {
    rider: arr[0] ?? "rides",
    gamer: arr[1] ?? "games",
    watcher: arr[2] ?? "shows",
    wanderer: arr[randomIndex] ?? "shows",
  };

  const area = lookup[type] as keyof typeof park.arrays;
  if (area === undefined || area === null) {
    console.log("Error getting area");
    return;
  }
  return area;
}

export function selectAttraction(guest: GuestInstance, park: ParkInstance) {
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
  if (randomIndex2 === undefined || randomIndex2 === null) return;
  const selected = attractions[randomIndex2];
  if (selected === null || selected === undefined) {
    console.log("failed 2");
  }
  return selected;
}
