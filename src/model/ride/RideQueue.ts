import type { Ride } from "./Ride.js";
import type { Rider } from "./Rider.js";

export class RideQueue {
  #ride: Ride;
  #head: Rider | null;
  #tail: Rider | null;

  constructor(ride: Ride) {
    this.#ride = ride;
    this.#head = null;
    this.#tail = null;
  }

  get ride() {
    return this.#ride;
  }
  set ride(newRide: Ride) {
    this.#ride = newRide;
  }
  get head() {
    return this.#head;
  }
  set head(newHead: Rider | null) {
    this.#head = newHead;
  }
  get tail() {
    return this.#tail;
  }
  set tail(newTail: Rider | null) {
    this.#tail = newTail;
  }

  log() {
    let current: Rider | null = this.#head;
    while (current) {
      console.log(`Guest: ${current.guest.name}`);
      current = current.next as Rider | null;
    }
  }
}
