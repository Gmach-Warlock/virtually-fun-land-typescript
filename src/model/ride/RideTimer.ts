import type { Ride } from "./Ride.js";

export class RideTimer {
  #ride: Ride;
  #duration: number;

  constructor(ride: Ride, duration: number) {
    this.#ride = ride;
    this.#duration = duration;
  }

  get ride() {
    return this.#ride;
  }
  set ride(newRide) {
    this.#ride = newRide;
  }
  get duration() {
    return this.#duration;
  }
  set duration(newDuration) {
    this.#duration = newDuration;
  }
}
