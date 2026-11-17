import type { GuestInstance } from "../types/guestTypeDefs.js";
import type { QueueInstance, WaitingGuest } from "../types/queuTypeDefs.ts.js";

export class GuestWaitInstance implements WaitingGuest {
  parent: QueueInstance<WaitingGuest>;
  guest: GuestInstance;
  next: WaitingGuest | null = null;
  isLineMarker: boolean;
  constructor(parent: QueueInstance<WaitingGuest>, guest: GuestInstance) {
    this.parent = parent;
    this.guest = guest;
    this.isLineMarker = false;
  }

  log() {
    console.log(
      `${this.guest.general.name} is in currently in line for ${this.parent.attraction.general.name}`,
    );
  }
}
