import { park } from "../../app.js";
import { getInLine } from "../../controller/openinig/fileGuests.js";
import type { GuestInstance } from "../../types/guestTypeDefs.js";
import { viewAttractionLines } from "../attractions/checkAttractionLines.js";

export function determineRestock() {
  const random = Math.random();
  if (random > 0.3) return false;
  return true;
}

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
    const isTrue = determineRestock();
    if (isTrue) {
      getInLine(guest, park, false);
    }
  });
  viewAttractionLines();
}
