import type {
  GuestInstance,
  GuestCurrently,
  ParkLocation,
} from "../../types/guestTypeDefs.js";
import type { QueueNotify } from "../../types/notifyTypeDefs.js";
import type { QueueInstance } from "../../types/queuTypeDefs.ts.js";

export function changePCurrently(
  queue: QueueInstance<GuestInstance>,
  guest: GuestInstance,
  reason: QueueNotify,
) {
  const lookup: Record<QueueNotify, Partial<GuestCurrently>> = {
    enqueue: "waiting",
    dequeue: "riding",
    jump: "waiting",
    leave: "leaving",
  };
  guest.track.pCurrently = lookup[reason];
  guest.track.pLocation = queue.attraction.general.name as ParkLocation;
}
