import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
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
}
