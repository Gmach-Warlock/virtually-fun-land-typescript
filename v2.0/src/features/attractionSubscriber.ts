import type { GuestInstance } from "../types/guestTypeDefs.js";
import type { QueueNotify } from "../types/notifyTypeDefs.js";

export function attractionsLogSubscriber(
  type: QueueNotify,
  guest: GuestInstance,
  initialize: boolean = false,
) {
  const lookup: Record<QueueNotify, string> = {
    enqueue: `${guest.general.name} has gotten in line for ${guest.track.pLocation}`,
    dequeue: `${guest.general.name} has finished at ${guest.track.pLocation}`,
    jump: `${guest.general.name} has entered the fast pass section.`,
    leave: `${guest.general.name} has decided to leave the line for ${guest.track.pLocation}`,
  };
  if (!initialize) {
    console.log(lookup[type]);
  }
}
