import type { Park } from "./Park.js";

export class ParkCounters {
  #park: Park | undefined;
  #counters: ParkCounters[] | undefined;

  constructor() {
    this.#counters = [];
  }

  get park() {
    return this.#park;
  }
  get counters() {
    return this.#counters;
  }
  set counters(newCounters) {
    this.#counters = newCounters;
  }
}
