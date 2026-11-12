import type { Ride } from "./Ride.js";

export class RideCounter {
  #ride: Ride;
  #count: number;
  #max: number;

  constructor(ride: Ride, max: number) {
    this.#ride = ride;
    this.#count = 0;
    this.#max = max;
  }

  get ride() {
    return this.#ride;
  }
  set ride(newRide: Ride) {
    this.#ride = newRide;
  }
  get count() {
    return this.#count;
  }
  set count(newCount: number) {
    this.#count = newCount;
  }
  get max() {
    return this.#max;
  }
  set max(newMax: number) {
    this.#max = newMax;
  }

  log() {
    console.log(
      `The ${this.ride.info?.name} currently has ${this.#count} many people waiting. The max amount is ${this.#max}`,
    );
  }
}
