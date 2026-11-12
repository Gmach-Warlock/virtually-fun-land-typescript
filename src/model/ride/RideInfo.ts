import type { RideType } from "../../types/RideTypes.js";
import type { Ride } from "./Ride.js";

export class RideInfo {
  #ride: Ride;
  #name: string;
  #description: string;
  #type: RideType;
  #occupancy: number;
  #duration: number;

  constructor(
    ride: Ride,
    name: string,
    description: string,
    type: RideType,
    duration: number,
    occupancy: number,
  ) {
    this.#ride = ride;
    this.#name = name;
    this.#description = description;
    this.#occupancy = occupancy;
    this.#type = type;
    this.#duration = duration;
  }

  get ride() {
    return this.#ride;
  }
  set ride(newRide) {
    this.#ride = newRide;
  }
  get name() {
    return this.#name;
  }
  set name(newName) {
    this.#name = newName;
  }
  get description() {
    return this.#description;
  }
  set description(newDesc) {
    this.#description = newDesc;
  }
  get type() {
    return this.#type;
  }
  set type(newType) {
    this.#type = newType;
  }
  get occupancy() {
    return this.#occupancy;
  }
  set occupancy(newOccupancy) {
    this.#occupancy = newOccupancy;
  }

  log() {
    console.log(
      `The ${this.#ride.info?.name ?? ""} is a ${this.#ride.info?.type} ride. It is ${this.#ride.timer?.duration} minutes long and ${this.#ride.info?.occupancy} is the amount of people who ride each time.`,
    );
  }
}
