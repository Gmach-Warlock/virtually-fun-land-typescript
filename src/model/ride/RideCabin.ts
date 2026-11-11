import type { Ride } from "./Ride.js";

export class RideCabin {
  #ride: Ride;
  #occupancy: number;

  constructor(ride: Ride, occupancy: number) {
    this.#ride = ride;
    this.#occupancy = occupancy;
  }

  get ride() {
    return this.#ride;
  }
  set ride(newRide) {
    this.#ride = newRide;
  }
  get occupancy() {
    return this.#occupancy;
  }
  set occupancy(newOccupancy) {
    this.#occupancy = newOccupancy;
  }
}
