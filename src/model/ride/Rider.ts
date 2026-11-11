import type { Guest } from "../guest/Guest.js";
import type { Ride } from "./Ride.js";

export class Rider {
  #ride: Ride;
  #guest: Guest;

  constructor(ride: Ride, guest: Guest) {
    this.#ride = ride;
    this.#guest = guest;
  }

  get ride() {
    return this.#ride;
  }
  set ride(newRide: Ride) {
    this.#ride = newRide;
  }
  get guest() {
    return this.#guest;
  }
  set guest(newGuest: Guest) {
    this.#guest = newGuest;
  }
}
