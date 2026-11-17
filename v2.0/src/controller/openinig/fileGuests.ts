import type {
  GuestCurrently,
  GuestInstance,
  ParkLocation,
} from "../../types/guestTypeDefs.js";
import type { ParkInstance } from "../../types/gameTypeDefs.js";
import { GuestWaitInstance } from "../../model/WaitingGuest.js";
import { selectAttraction, buildGuests } from "./openingBuild2.js";
import { park } from "../../app.js";

export function getInLine(
  guest: GuestInstance,
  park: ParkInstance,
  initial = true,
): void {
  const selected = selectAttraction(guest, park);
  if (!selected || !("queue" in selected)) return;
  const queue = selected.queue;
  if (!queue) {
    console.log("failed 2");
    return;
  }
  const newWaiter = new GuestWaitInstance(queue, guest);

  if (!initial) {
    console.log(
      `${newWaiter.guest.general.name} has decided to get in line for ${queue.attraction.general.name}`,
    );
    updateGuestTracker(
      guest,
      "waiting",
      queue.attraction.general.name as ParkLocation,
    );
  }
  queue.enqueue(newWaiter);
}

export function updateGuestTracker(
  guest: GuestInstance,
  currently: GuestCurrently,
  location: ParkLocation,
) {
  const guestToFind = park.arrays.guests.find(
    (gst) => gst.general.id === guest.general.id,
  );
  if (!guestToFind) {
    console.log(`No guest to track!`);
    return;
  }
  guestToFind.track.pCurrently = currently;
  guestToFind.track.pLocation = location;
}

export function fileGuests() {
  const guests = buildGuests();
  if (!guests) return;
  guests.forEach((guest: GuestInstance) => {
    getInLine(guest, park);
  });
  park.log("initialize");
}
