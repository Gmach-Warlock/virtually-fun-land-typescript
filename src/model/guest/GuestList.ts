import {
  addItemToArray,
  removeItemFromArray,
} from "../../controller/crud/CRUDHelpers.js";
import type { Guest } from "./Guest.js";

function logGuest(guest: Guest) {
  console.log(`Guest: ${guest.name}`);
}
export class GuestList {
  #guests: Guest[];

  constructor() {
    this.#guests = [];
  }

  get guests() {
    return this.#guests;
  }
  set guests(newGuests: Guest[]) {
    this.#guests = newGuests;
  }

  add(guest: Guest) {
    this.#guests = addItemToArray(this.#guests, guest);
  }
  remove(guest: Guest) {
    this.#guests =
      removeItemFromArray(this.#guests, guest, "name", guest.name) ?? [];
  }

  log() {
    this.#guests.forEach((guest: Guest) => logGuest(guest));
  }
}
