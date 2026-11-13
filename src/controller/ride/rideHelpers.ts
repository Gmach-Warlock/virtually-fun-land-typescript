import type { Guest } from "../../model/guest/Guest.js";
import type { Ride } from "../../model/ride/Ride.js";
import type { RideCounter } from "../../model/ride/RideCounter.js";
import { Rider } from "../../model/ride/Rider.js";

export function createRider(ride: Ride, guest: Guest) {
  const newRider = new Rider(ride, guest);
  return newRider;
}

export function enqueueHelper(
  guest: Guest,
  ride: Ride,
  counter: RideCounter,
  head: Rider,
  tail: Rider,
) {
  if (counter.count >= counter.max) {
    console.log(`The line is currently full. Please try again later. `);
    return;
  }
  const newRider = createRider(ride, guest);
  if (head === null && tail === null) {
    head = newRider;
    tail = newRider;
  }
  if (tail !== null && tail !== null) {
    const temp = tail;
    tail = newRider;
    temp.next = newRider;
  }
  counter.count += 1;
}
