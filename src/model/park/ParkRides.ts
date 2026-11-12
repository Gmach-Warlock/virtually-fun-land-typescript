import type { Ride } from "../ride/Ride.js";
import { vfl, type Park } from "./Park.js";

export class ParkRides {
  #park: Park;
  #rides: Ride[];
  static #instance: ParkRides | null = null;
  constructor() {
    this.#park = vfl;
    this.#rides = [];
  }

  get park() {
    return this.#park;
  }
  set park(newPark: Park) {
    this.#park = newPark;
  }
  get rides() {
    return this.#rides;
  }
  set rides(newRides) {
    this.#rides = newRides;
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new ParkRides();
    }
    return this.#instance;
  }
}

export const vflRides = ParkRides.getInstance();
