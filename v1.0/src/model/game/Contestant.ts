import type { Guest } from "../guest/Guest.js";

export class Contestant {
  #id: string;
  #guest: Guest;
  #next: Contestant | null = null;

  constructor(guest: Guest) {
    this.#id = crypto.randomUUID();
    this.#guest = guest;
  }

  get id() {
    return this.#id;
  }
  get guest() {
    return this.#guest;
  }
  get next() {
    return this.#next;
  }
  set next(newNext) {
    this.#next = newNext;
  }
}
