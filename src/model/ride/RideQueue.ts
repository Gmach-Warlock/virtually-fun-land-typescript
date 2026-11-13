import type { Guest } from "../guest/Guest.js";
import type { Ride } from "./Ride.js";
import { Rider } from "./Rider.js";
import { createRider } from "../../controller/ride/rideHelpers.js";
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

  dequeue() {
    const counter = this.#ride.counter;
    if (!counter) return;
    if (this.#head === null) {
      console.log(`The line is currently empty. `);
      return;
    }
    this.#head = this.#head?.next;
    counter.count -= 1;
    console.log(`${this.#head} has gotten off of the ${this.#ride.info.name}`);
  }
  enqueue(guest: Guest) {
    const counter = this.#ride.counter;
    if (!counter) return;
    if (counter.count >= counter.max) {
      console.log(`The line is currently full. Please try again later. `);
      return;
    }
    const newRider = createRider(this.#ride, guest);
    if (this.#head === null && this.#tail === null) {
      this.#head = newRider;
      this.#tail = newRider;
    }
    if (this.#tail !== null && this.#tail !== null) {
      const temp = this.#tail;
      this.#tail = newRider;
      temp.next = newRider;
    }
    counter.count += 1;
    console.log(`${guest.name} has gotten in line for ${this.#ride.info.name}`);
  }
  jump(guest: Guest) {
    const counter = this.#ride.counter?.count;
    if (!counter) return;
    const newRider = createRider(this.#ride, guest);
    if (this.#head === null && this.#tail === null) {
      this.#head = newRider;
      this.#tail = newRider;
    }
    if (this.#head !== null && this.#tail !== null) {
      const temp = this.#head;
      this.#head = newRider;
      newRider.next = temp;
    }
  }

  log() {
    let current: Rider | null = this.#head;
    while (current) {
      console.log(`Guest: ${current.guest.name}`);
      current = current.next as Rider | null;
    }
  }
}
