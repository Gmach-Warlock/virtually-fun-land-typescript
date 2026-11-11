import type { Park } from "./Park.js";

export class ParkQueues {
  #park: Park | undefined;
  #queues: ParkQueues[] | undefined;

  constructor() {
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
}
