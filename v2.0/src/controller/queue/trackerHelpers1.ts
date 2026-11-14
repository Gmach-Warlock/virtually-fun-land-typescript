import type { IGuest, TCurrently, TParkLocation } from "../../types/IGuest.js";
import type { IQueueNotify } from "../../types/INotify.js";
import type { IQueue } from "../../types/IQueue.js";

export function changePCurrently(
  queue: IQueue<IGuest>,
  guest: IGuest,
  reason: IQueueNotify,
) {
  const lookup: Record<IQueueNotify, Partial<TCurrently>> = {
    enqueue: "waiting",
    dequeue: "riding",
    jump: "waiting",
    leave: "leaving",
  };
  guest.track.pCurrently = lookup[reason];
  guest.track.pLocation = queue.attraction.general.name as TParkLocation;
}
