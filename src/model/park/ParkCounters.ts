import type { Park } from "./Park.js";

export class ParkCounters {
  static #instance: ParkCounters | null = null;
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

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new ParkCounters();
    }
    return this.#instance;
  }
}

export const vflCounters = ParkCounters.getInstance();
