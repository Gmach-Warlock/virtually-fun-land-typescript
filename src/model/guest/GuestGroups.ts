import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
import type { Personality } from "../../types/guest/guestTypes.js";
import type { Guest } from "./Guest.js";
import { vflGuestList, type GuestList } from "./GuestList.js";

export class GuestGroups {
  static #instance: GuestGroups | null = null;
  #guestList: GuestList;
  #riders: Guest[];
  #gamers: Guest[];
  #watchers: Guest[];
  #wanderers: Guest[];

  constructor() {
    this.#guestList = vflGuestList;
    this.#riders = [];
    this.#gamers = [];
    this.#watchers = [];
    this.#wanderers = [];
  }

  get guestList() {
    return this.#guestList;
  }
  get riders() {
    return this.#riders;
  }
  set riders(newRiders: Guest[]) {
    this.#riders = newRiders;
  }
  get gamers() {
    return this.#gamers;
  }
  set gamers(newGamers) {
    this.#gamers = newGamers;
  }
  get watchers() {
    return this.#watchers;
  }
  set watchers(newWatchers: Guest[]) {
    this.#watchers = newWatchers;
  }
  get wanderers() {
    return this.#wanderers;
  }
  set wanderers(newWanderers: Guest[]) {
    this.#wanderers = newWanderers;
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new GuestGroups();
    }
    return this.#instance;
  }
  add(type: Personality, guest: Guest) {
    const lookup = {
      rider: () => {
        this.#riders = addItemToArray(this.#riders, guest);
      },
      gamer: () => {
        this.#gamers = addItemToArray(this.#gamers, guest);
      },
      watcher: () => {
        this.#watchers = addItemToArray(this.#watchers, guest);
      },
      wanderer: () => {
        this.#wanderers = addItemToArray(this.#wanderers, guest);
      },
    };
    if (!type || !lookup[type]) return;
    lookup[type]();
  }

  log() {
    console.log(`riders: `, this.#riders);
    console.log(`gamers: `, this.#gamers);
    console.log(`watchers: `, this.#watchers);
    console.log(`wanderers: `, this.#wanderers);
  }
}

export const vflGuestGroups = GuestGroups.getInstance();
