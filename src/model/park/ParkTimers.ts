import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
import type { RideTimer } from "../ride/RideTimer.js";
import { vfl, type Park } from "./Park.js";

export class ParkTimers {
  #park: Park | undefined;
  #timers: RideTimer[] | undefined;
  static #instance: ParkTimers | null = null;

  constructor() {
    this.#park = vfl;
    this.#timers = [];
  }

  get park() {
    return this.#park;
  }
  set park(newPark) {
    this.#park = newPark;
  }
  get timers() {
    return this.#timers;
  }
  set timers(newTimers) {
    this.#timers = newTimers;
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new ParkTimers();
    }
    return this.#instance;
  }
  add(timer: RideTimer) {
    this.#timers = addItemToArray(this.#timers ?? [], timer);
  }
}

export const vflTimers = ParkTimers.getInstance();
