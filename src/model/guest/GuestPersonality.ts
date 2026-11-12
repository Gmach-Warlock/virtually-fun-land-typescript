import { Guest } from "./Guest.js";
import type { Personality } from "../../types/GuestTypes.js";

export class GuestPersonality {
  #guest: Guest;
  #type: Personality;

  constructor(guest: Guest, type: Personality) {
    this.#guest = guest;
    this.#type = type;
  }

  get guest() {
    return this.#guest;
  }
  set guest(newGuest) {
    this.#guest = newGuest;
  }
  get type() {
    return this.#type;
  }
  set type(newtype) {
    this.#type = newtype;
  }

  log() {
    console.log(`${this.#guest.name} is a ${this.#type}`);
  }
}
