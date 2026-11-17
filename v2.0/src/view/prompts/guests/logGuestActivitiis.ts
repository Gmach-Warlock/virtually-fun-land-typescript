import type { ParkArrays } from "../../../types/gameTypeDefs.js";
import type { GuestInstance } from "../../../types/guestTypeDefs.js";
import { park } from "../../../app.js";

export function logAttendance(arrays: ParkArrays = park.arrays) {
  console.log(
    `
  A fine turnout today. There are currently ${arrays.guests.length} people in attendance. 
  `,
  );
}

export function logGuests(arrays: ParkArrays) {
  console.log(`Here are the current guests in attendance. 
    `);
  const names = arrays.guests.map(
    (guest: GuestInstance) => guest.general.name as string,
  );
  if (names === undefined || names === null || names.length === 0) return;
  // logNameString(names)
}

export function logRoamer(guest: GuestInstance) {
  if (guest.general.pType === "wanderer") {
    console.log(`${guest.general.name} is roaming around enjoying the sites!`);
  }
}

export function logGuestCurrently(guest: GuestInstance) {
  console.log(
    `${guest.general.name} is ${guest.track.pCurrently}at ${guest.track.pLocation}`,
  );
}
