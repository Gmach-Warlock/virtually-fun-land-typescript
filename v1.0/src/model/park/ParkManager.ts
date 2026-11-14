import { Park, vfl } from "./Park.js";
import { vflCounters, type ParkCounters } from "./ParkCounters.js";
import { vflQueues, type ParkQueues } from "./ParkQueues.js";
import { vflTimers, type ParkTimers } from "./ParkTimers.js";
export class ParkManager {
  static #instance: ParkManager | null = null;
  #park: Park | undefined;
  counters: ParkCounters | undefined;
  timers: ParkTimers | undefined;
  queues: ParkQueues | undefined;

  constructor() {
    this.#park = vfl;
    this.counters = vflCounters;
    this.timers = vflTimers;
    this.queues = vflQueues;
  }

  get park() {
    return this.#park;
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new ParkManager();
    }
    return this.#instance;
  }
}

export const vflManager = ParkManager.getInstance();
