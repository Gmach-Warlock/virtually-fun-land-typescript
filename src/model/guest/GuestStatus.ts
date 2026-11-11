import type { GStatus } from "../../types/basicTypes.js";
import type { Guest } from "./Guest.js";

export class GuestStatus {
  #guest: Guest;
  #status: GStatus;

  constructor(guest: Guest, status: GStatus) {
    this.#guest = guest;
    this.#status = status;
  }

  get guest() {
    return this.#guest;
  }
  set guest(newGuest) {
    this.#guest = newGuest;
  }
  get status() {
    return this.#status;
  }
  set status(newStatus) {
    this.#status = newStatus;
  }
}
