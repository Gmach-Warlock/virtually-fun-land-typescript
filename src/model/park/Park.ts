import type { RideCabin } from "../ride/RideCabin.js";
import type { RideCounter } from "../ride/RideCounter.js";
import type { RideQueue } from "../ride/RideQueue.js";
import type { RideTimer } from "../ride/RideTimer.js";

export class Park {
  #name: string;
  #counters: RideCounter[] | undefined;
  #cabins: RideCabin[] | undefined;
  #queues: RideQueue[] | undefined;
  #timers: RideTimer[] | undefined;

  constructor() {
    this.#name = "Virtually Fun Land";
  }

  get name() {
    return this.#name;
  }
  set name(newName) {
    this.#name = newName;
  }
  get counters() {
    return this.#counters;
  }
  set counters(newCounters) {
    this.#counters = newCounters;
  }
  get cabins() {
    return this.#cabins;
  }
  set cabins(newCabins) {
    this.#cabins = newCabins;
  }
  get queues() {
    return this.#queues;
  }
  set queues(newQueues) {
    this.#queues = newQueues;
  }
  get timers() {
    return this.#timers;
  }
  set timers(newTimers) {
    this.#timers = newTimers;
  }
}
