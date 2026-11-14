import type { IGuest } from "../types/IGuest.js";
import type { IQueue, IWaiter } from "../types/IQueue.js";

export class Rider implements IWaiter {
  parent: IQueue<IGuest>;
  guest: IGuest;
  next: IWaiter | null = null;
  isLineMarker: boolean;
  constructor(parent: IQueue<IGuest>, guest: IGuest) {
    this.parent = parent;
    this.guest = guest;
    this.isLineMarker = false;
  }

  log() {
    console.log(`${this.guest.general.name} is in currently in line for`);
  }
}
