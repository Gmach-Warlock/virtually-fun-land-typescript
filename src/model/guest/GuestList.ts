import { Park, vfl } from "../park/Park.js";
import type { Guest } from "./Guest.js";
import type { BasicNotify } from "../../types/basic/basicTypes.js";
import {
  addItemToArray,
  removeItemFromArray,
} from "../../controller/crud/CRUDHelpers.js";

export class GuestList {
  static #instance: GuestList | null = null;
  #park: Park | undefined;
  #guests: Guest[];

  constructor() {
    this.#park = vfl;
    this.#guests = [];
  }

  get park() {
    return this.#park;
  }
  get guests() {
    return this.#guests;
  }
  set guests(newGuests: Guest[]) {
    this.#guests = newGuests;
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new GuestList();
    }
    return this.#instance;
  }
  add(guest: Guest) {
    this.#guests = addItemToArray(this.#guests, guest);
  }
  remove(guest: Guest) {
    this.#guests =
      removeItemFromArray(this.#guests, guest, "name", guest.name) ?? [];
  }

  log(type: BasicNotify) {
    const lookup: Partial<Record<BasicNotify, string>> = {
      initialize: "A decent crowd of people have shown up today for opening!",
      add: "A guest has entered the park.",
      remove: "A guest has left the park.",
    };
    console.log(`
      `);
    if (lookup[type]) console.log(lookup[type]);
    this.#guests.forEach((guest: Guest) => console.log(`${guest.name}`));
    console.log(`- - - - - - - - - - - - - - - - - - - - - - - - `);
  }
}

export const vflGuestList = GuestList.getInstance();
