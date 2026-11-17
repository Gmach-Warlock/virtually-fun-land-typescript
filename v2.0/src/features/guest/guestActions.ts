import { park } from "../../app.js";
import { getInLine } from "../../controller/openinig/fileGuests.js";
import { determineIsWinner } from "../../controller/rng/gameStats.js";
import type { GuestInstance } from "../../types/guestTypeDefs.js";

export function findRestockers() {
  const guests = park.arrays.guests;
  const available = guests.filter(
    (guest: GuestInstance) =>
      guest.track.pCurrently !== "waiting" &&
      guest.track.pCurrently !== "playing" &&
      guest.track.pCurrently !== "riding",
  );
  return available;
}

export function restockLines() {
  const available = findRestockers();
  if (!Array.isArray(available)) return;
  available.forEach((guest: GuestInstance) => {
    const isTrue = determineIsWinner();
    if (isTrue) {
      getInLine(guest, park, false);
    }
  });
}
