import type { Attraction } from "../types/attractionsTypeDefs.js";
import type { ParkLocation } from "../types/guestTypeDefs.js";
import type { QueueInstance, WaitingGuest } from "../types/queuTypeDefs.ts.js";
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
    guest.guest.track.pCurrently = "waiting";
    guest.guest.track.pLocation = this.attraction.general.name as ParkLocation;
    this.map.set(guest.guest.general.id, guest);
    if (guest.guest.general.vip) {
      this.jump(guest);
      return;
    }
    if (this.head === null || this.tail === null) {
      this.head = guest;
      this.tail = guest;
      guest.next = null;
      return;
    }
    if (this.head !== null || this.tail !== null) {
      this.tail.next = guest;
      this.tail = guest;
      guest.next = null;
    }
    this.arr.push(guest);
  }
  dequeue(): WaitingGuest {
    if (this.head === null) {
      console.log(`Nobody left in line for ${this.attraction.general.name}`);
      return null as unknown as WaitingGuest;
    }
    const dequeud = this.head;
    this.head = dequeud.next;
    if (this.head === null) {
      this.tail === null;
    }
    if (dequeud?.guest?.general?.id) {
      this.map.delete(dequeud.guest.general.id);
    }
    const indexToSplice = this.arr.findIndex(
      (guest: WaitingGuest) =>
        guest.guest.general.id === dequeud?.guest.general.id,
    );
    if (indexToSplice !== -1) {
      this.arr.splice(indexToSplice, 1);
    }
    dequeud.next = null;
    return dequeud as unknown as WaitingGuest;
  }
  jump(guest: WaitingGuest): void {
    console.log(
      `${guest.guest.general.name} is a VIP and has entered the Fast Pass Zone for ${this.attraction.general.name}!`,
    );
    guest.guest.track.pCurrently = "waiting";
    guest.guest.track.pLocation = this.attraction.general.name as ParkLocation;
    if (this.head === null && this.tail === null) {
      this.head = guest;
      this.tail = guest;
      guest.next = null;
      this.arr.push(guest);
      return;
    }
    const fastPassSize = 3;
    let current = this.head;
    let index = 0;
    while (
      current !== null &&
      current.next !== null &&
      index < fastPassSize - 1
    ) {
      current = current?.next;
      index++;
    }
    if (current === null) {
      return;
    }
    const nextNode = current.next;
    current.next = guest;
    guest.next = nextNode;
    if (nextNode === null) {
      this.tail = guest;
    }
    const targetIndex = Math.min(index + 1, this.arr.length);
    this.arr.splice(targetIndex, 0, guest);
  }

  log() {
    logLine(this);
  }
}
