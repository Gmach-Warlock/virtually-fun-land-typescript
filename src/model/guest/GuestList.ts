import {
  addItemToArray,
  removeItemFromArray,
} from "../../controller/crud/CRUDHelpers.js";
import type { BasicNotify } from "../../types/basicTypes.js";
import type { Guest } from "./Guest.js";

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

  log(type: BasicNotify) {
    if (type === "initialize")
      console.log(`A decent crowd has shown up at the park openening today!`);
    this.#guests.forEach((guest: Guest) => guest.log(type));
  }
}
