import { vfl, type Park } from "./Park.js";

export class ParkQueues {
  #park: Park | undefined;
  #queues: ParkQueues[] | undefined;
  static #instance: ParkQueues | null = null;

  constructor() {
    this.#park = vfl;
    this.#queues = [];
  }

  get park() {
    return this.#park;
  }
  set park(newPark) {
    this.#park = newPark;
  }
  get queues() {
    return this.#queues;
  }
  set queues(newQueues) {
    this.#queues = newQueues;
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new ParkQueues();
    }
    return this.#instance;
  }
}

export const vflQueues = ParkQueues.getInstance();
