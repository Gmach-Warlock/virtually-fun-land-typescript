import type { Park } from "./Park.js";

export class ParkTimers {
  #park: Park | undefined;
  #timers: ParkTimers[] | undefined;

  constructor() {
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
}
