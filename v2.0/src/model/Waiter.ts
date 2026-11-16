import type { GuestInstance } from "../types/guestTypeDefs.js";
import type { QueueInstance, WaitingGuest } from "../types/queuTypeDefs.ts.js";

export class Waiter implements WaitingGuest {
  parent: QueueInstance<GuestInstance>;
  guest: GuestInstance;
  next: WaitingGuest | null = null;
  isLineMarker: boolean;
  constructor(parent: QueueInstance<GuestInstance>, guest: GuestInstance) {
    this.parent = parent;
    this.guest = guest;
    this.isLineMarker = false;
  }

  log() {
    console.log(`${this.guest.general.name} is in currently in line for`);
  }
}
