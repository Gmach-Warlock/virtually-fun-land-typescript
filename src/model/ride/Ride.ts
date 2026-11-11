import type { RideCabin } from "./RideCabin.js";
import type { RideCounter } from "./RideCounter.js";
import type { RideQueue } from "./RideQueue.js";
import type { RideTimer } from "./RideTimer.js";

export class Ride {
  #name: string;
  #counter: RideCounter | undefined;
  #cabin: RideCabin | undefined;
  #timer: RideTimer | undefined;
  #queue: RideQueue | undefined;

  constructor(name: string) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
  set name(newName) {
    this.#name = newName;
  }
  get counter() {
    return this.#counter;
  }
  set counter(newCounter) {
    this.#counter = newCounter;
  }
  get cabin() {
    return this.#cabin;
  }
  set cabin(newCabin) {
    this.#cabin = newCabin;
  }
  get timer() {
    return this.#timer;
  }
  set timer(newTimer) {
    this.#timer = newTimer;
  }
  get queue() {
    return this.#queue;
  }
  set queue(newQueue) {
    this.#queue = newQueue;
  }
}
