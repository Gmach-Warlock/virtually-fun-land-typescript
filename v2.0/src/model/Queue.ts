import {
  dequeueHelper,
  enqueueHelper,
} from "../controller/queue/queueHelpers.js";
import type { IAttraction } from "../types/IAttractions.js";
import type { IGuest } from "../types/IGuest.js";
import type { ILinkedChild, IQueue, IQueueObj } from "../types/IQueue.js";

export class Queue implements IQueue<IGuest | null> {
  attraction: IAttraction;
  arr: IQueueObj[];
  map: Map<string, IQueueObj>;
  head: IQueueObj | null;
  tail: IQueueObj | null;
  vipMark: IQueueObj | null;

  constructor(attraction: IAttraction) {
    this.attraction = attraction;
    this.arr = [];
    this.map = new Map();
    this.head = null;
    this.tail = null;
    this.vipMark = null;
  }

  enqueue(guest: IQueueObj): void {
    if (this.head === null || this.tail === null) return;
    enqueueHelper(guest, this.head, this.tail);
  }
  dequeue(): ILinkedChild<IGuest | null> {
    if (this.head === null && this.tail === null) {
      console.log(`Nobody left in line for ${this.attraction.general.name}`);
      return null as unknown as ILinkedChild<IGuest | null>;
    }
    const dequeud = dequeueHelper(
      this.head,
      this.tail,
    ) as ILinkedChild<IGuest | null>;
    return dequeud;
  }
  jump(item: IGuest | null): void {}
}
