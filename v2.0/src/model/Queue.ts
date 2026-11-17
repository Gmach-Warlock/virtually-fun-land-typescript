import { updateGuestTracker } from "../controller/openinig/fileGuests.js";
import type { Attraction } from "../types/attractionsTypeDefs.js";
import type { ParkLocation } from "../types/guestTypeDefs.js";
import type { QueueInstance, WaitingGuest } from "../types/queuTypeDefs.ts.js";
import { denyAndReturn } from "../view/getInput.js";
import { logLine } from "../view/prompts/attractions/logLines.js";

export class Queue implements QueueInstance<WaitingGuest> {
  attraction: Attraction;
  arr: WaitingGuest[];
  map: Map<string, WaitingGuest>;
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
    if (guest.guest.general.vip) {
      console.log(
        `${guest.guest.general.name} is a VIP so they enter the fast Pass Zone! `,
      );
    }
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
    guest.guest.track.pCurrently = "waiting";
    guest.guest.track.pLocation = this.attraction.general.name as ParkLocation;
  }
  dequeue(): WaitingGuest {
    if (this.head === null && this.tail === null) {
      console.log(`Nobody left in line for ${this.attraction.general.name}`);
      return null as unknown as WaitingGuest;
    }
    const dequeud = this.head;
    if (dequeud !== null) {
      this.head = dequeud.next;
    }
    const indexToSplice = this.arr.findIndex(
      (guest: WaitingGuest) =>
        guest.guest.general.id === dequeud?.guest.general.id,
    );
    if (!indexToSplice) {
      denyAndReturn(`Couldn't get index`);
      return null as unknown as WaitingGuest;
    }
    this.arr = this.arr.splice(indexToSplice, 1);
    // DEBUG("CHECK INDEX DEQUEUE", [dequeud]);
    return dequeud as unknown as WaitingGuest;
  }
  jump(item: WaitingGuest): void {}

  log() {
    logLine(this);
  }
}
