import type { ParkArrays } from "../../types/gameTypeDefs.js";
import type { GuestInstance } from "../../types/guestTypeDefs.js";
import { logLine, logNameString } from "./logLines.js";

export function logAttendance(arrays: ParkArrays) {
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

export function logOpeningRush(arrays: ParkArrays, initialize = false) {
  console.log(
    `
  A fine turnout today. There are currently ${arrays.guests.length} people in attendance. 
  `,
  );
  if (initialize) {
    console.log(
      `After hearing the announcement, the guests all rush to their favorite attractions!!`,
    );
  }
  arrays.games.forEach((game) => {
    if (game.queue) {
      logLine(game.queue as any);
    }
  });
  arrays.rides.forEach((ride) => {
    if (ride.queue) {
      logLine(ride.queue as any);
    }
  });
  arrays.shows.forEach((show) => {
    if (show.queue) {
      logLine(show.queue as any);
    }
  });
}

export function logRoamer(guest: GuestInstance) {
  if (guest.general.pType === "wanderer") {
    console.log(`${guest.general.name} is roaming around enjoying the sites!`);
  }
}
