import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
import type { RideQueue } from "../ride/RideQueue.js";
import { vfl, type Park } from "./Park.js";

export class ParkQueues {
  static #instance: ParkQueues | null = null;
  #park: Park | undefined;
  queues: RideQueue[] | undefined;

  constructor() {
    this.#park = vfl;
    this.queues = [];
  }

  get park() {
    return this.#park;
  }
  set park(newPark) {
    this.#park = newPark;
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new ParkQueues();
    }
    return this.#instance;
  }
  add(queue: RideQueue) {
    this.queues = addItemToArray(this.queues ?? [], queue);
  }

  log() {
    console.log(`Here is a list of the rides and their lines`);
    this.queues?.forEach((queue: RideQueue) => {
      console.log(`${queue.ride.info?.name}`);
    });
  }
}

export const vflQueues = ParkQueues.getInstance();
