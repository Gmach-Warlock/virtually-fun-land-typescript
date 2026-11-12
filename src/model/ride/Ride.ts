import type { RideInfo } from "./RideInfo.js";
import type { RideCounter } from "./RideCounter.js";
import type { RideQueue } from "./RideQueue.js";
import type { RideTimer } from "./RideTimer.js";
import type { RideInfoObj } from "../../types/rideInterfaces.js";

export class Ride {
  #id: string;
  #info: RideInfo | undefined;
  #counter: RideCounter | undefined;
  #timer: RideTimer | undefined;
  #queue: RideQueue | undefined;

  constructor(id: string) {
    this.#id = id;
  }

  get id() {
    return this.#id;
  }
  get info() {
    return this.#info;
  }
  set info(newInfo) {
    this.#info = newInfo;
  }
  get counter() {
    return this.#counter;
  }
  set counter(newCounter) {
    this.#counter = newCounter;
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

  log() {
    console.log(
      `The ${this.#info?.name ?? ""} is a ${this.#info?.type} ride. It is ${this.#timer?.duration} minutes long and ${this.#info?.occupancy} is the amount of people who ride each time.`,
    );
  }
}
