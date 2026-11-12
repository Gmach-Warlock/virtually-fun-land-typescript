import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
import type { RideCounter } from "../ride/RideCounter.js";
import { vfl, type Park } from "./Park.js";

export class ParkCounters {
  static #instance: ParkCounters | null = null;
  #park: Park | undefined;
  #counters: RideCounter[] | undefined;

  constructor() {
    this.#park = vfl;
    this.#counters = [];
  }

  get park() {
    return this.#park;
  }
  get counters() {
    return this.#counters;
  }
  set counters(newCounters: RideCounter[] | undefined) {
    this.#counters = newCounters;
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new ParkCounters();
    }
    return this.#instance;
  }

  add(counter: RideCounter) {
    this.#counters = addItemToArray(this.#counters ?? [], counter);
  }
}

export const vflCounters = ParkCounters.getInstance();
