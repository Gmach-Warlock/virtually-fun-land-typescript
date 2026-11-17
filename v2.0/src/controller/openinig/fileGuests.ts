import type { GuestInstance } from "../../types/guestTypeDefs.js";
import type { ParkInstance } from "../../types/gameTypeDefs.js";
import { Waiter } from "../../model/Waiter.js";
import { selectAttraction, buildGuests } from "./openingBuild2.js";
import { park } from "../../app.js";

export function getInLine(guest: GuestInstance, park: ParkInstance): void {
  const selected = selectAttraction(guest, park);
  if (!selected || !("queue" in selected)) return;
  const queue = selected.queue;
  if (!queue) {
    console.log("failed 2");
    return;
  }
  const newWaiter = new Waiter(queue, guest);
  // console.log("check1 ", area, queue.head, newWaiter);
  queue.enqueue(newWaiter);
}

export function fileGuests() {
  const guests = buildGuests();
  if (!guests) return;
  guests.forEach((guest: GuestInstance) => {
    getInLine(guest, park);
  });
  park.log("initialize");
}
