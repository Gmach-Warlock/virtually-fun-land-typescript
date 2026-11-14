import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
import type { Ride } from "../ride/Ride.js";
import { vfl, type Park } from "./Park.js";

export class ParkRides {
  #park: Park;
  rides: Ride[];
  static #instance: ParkRides | null = null;
  constructor() {
    this.#park = vfl;
    this.rides = [];
  }

  get park() {
    return this.#park;
  }
  set park(newPark: Park) {
    this.#park = newPark;
  }
  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new ParkRides();
    }
    return this.#instance;
  }
  add(ride: Ride) {
    this.rides = addItemToArray(this.rides, ride);
  }
  log() {
    console.log(`
Virtually Fun Land's rides are now up and running with expected wait times!
    `);
    this.rides.forEach((ride) => ride.log());
  }
}

export const vflRides = ParkRides.getInstance();
