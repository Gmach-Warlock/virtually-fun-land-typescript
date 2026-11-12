import type { ParkBuilder } from "../../types/basicInterfaces.js";

export class Park {
  #name: string;
  #counters: ParkBuilder["counters"] | undefined;
  #queues: ParkBuilder["queues"] | undefined;
  #timers: ParkBuilder["timers"] | undefined;
  static #instance: Park | null = null;
  constructor() {
    this.#name = "Virtually Fun Land";
  }

  get name() {
    return this.#name;
  }
  get counters() {
    return this.#counters;
  }
  set counters(newCounters: ParkBuilder["counters"] | undefined) {
    this.#counters = newCounters;
  }
  get queues() {
    return this.#queues;
  }
  set queues(newQueues: ParkBuilder["queues"] | undefined) {
    this.#queues = newQueues;
  }
  get timers() {
    return this.#timers;
  }
  set timers(newTimers: ParkBuilder["timers"] | undefined) {
    this.#timers = newTimers;
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new Park();
    }
    return this.#instance;
  }
  build(buildObj: ParkBuilder) {
    this.#counters = buildObj.counters;
    this.#timers = buildObj.timers;
    this.#queues = buildObj.queues;
  }
}

export const vfl = Park.getInstance();
