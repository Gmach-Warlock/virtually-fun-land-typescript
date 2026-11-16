import { dequeueHelper } from "../controller/queue/queueHelpers.js";
import type { Attraction } from "../types/attractionsTypeDefs.js";
import type { GuestInstance } from "../types/guestTypeDefs.js";
import type {
  LinkedChild,
  QueueInstance,
  QueueObj,
  WaitingGuest,
} from "../types/queuTypeDefs.ts.js";
import { logLine } from "../view/prompts/logLines.js";

export class Queue implements QueueInstance<WaitingGuest | null> {
  attraction: Attraction;
  arr: QueueObj[];
  map: Map<string, QueueObj>;
  head: WaitingGuest | null;
  tail: WaitingGuest | null;
  vipMark: WaitingGuest | null;

  constructor(attraction: Attraction) {
    this.attraction = attraction;
    this.arr = [];
    this.map = new Map();
    this.head = null;
    this.tail = null;
    this.vipMark = null;
  }

  enqueue(guest: WaitingGuest): void {
    if (this.head === null || this.tail === null) {
      this.head = guest;
      this.tail = guest;
      return;
    }
    if (this.head !== null && this.tail !== null) {
      const temp = this.tail;
      this.tail = guest;
      if (temp) temp.next = guest;
    }
    this.arr.push(guest);
  }
  dequeue(): LinkedChild<GuestInstance | null> {
    if (this.head === null && this.tail === null) {
      console.log(`Nobody left in line for ${this.attraction.general.name}`);
      return null as unknown as LinkedChild<GuestInstance | null>;
    }
    const dequeud = dequeueHelper(
      this.head,
      this.tail,
    ) as LinkedChild<GuestInstance | null>;
    return dequeud;
  }
  jump(item: WaitingGuest | null): void {}

  log() {
    logLine(this);
  }
}
