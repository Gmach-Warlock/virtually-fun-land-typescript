import { Guest } from "./Guest.js";
import type { Personality } from "../../types/guest/guestTypes.js";

export class GuestPersonality {
  #guest: Guest;
  type: Personality;

  constructor(guest: Guest, type: Personality) {
    this.#guest = guest;
    this.type = type;
  }

  get guest() {
    return this.#guest;
  }
  set guest(newGuest) {
    this.#guest = newGuest;
  }

  log() {
    console.log(`${this.#guest.name} is a ${this.type}`);
  }
}
