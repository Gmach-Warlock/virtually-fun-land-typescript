import { Ride } from "../../model/ride/Ride.js";
import { RideCabin } from "../../model/ride/RideCabin.js";
import { RideCounter } from "../../model/ride/RideCounter.js";
import { RideQueue } from "../../model/ride/RideQueue.js";
import { RideTimer } from "../../model/ride/RideTimer.js";

export interface RideHubObj {
  ride: Ride;
  counter: RideCounter;
  cabin: RideCabin;
  timer: RideTimer;
  queue: RideQueue;
}

export function createRideHub(
  name: string,
  duration: number,
  max: number,
  occupancy: number,
) {
  const newRide = new Ride(name);
  const newCounter = new RideCounter(newRide, max);
  const newCabin = new RideCabin(newRide, occupancy);
  const newTimer = new RideTimer(newRide, duration);
  const newQueue = new RideQueue(newRide);
  newRide.counter = newCounter;
  newRide.cabin = newCabin;
  newRide.timer = newTimer;
  newRide.queue = newQueue;
  const rideObj: RideHubObj = {
    ride: newRide,
    counter: newCounter,
    cabin: newCabin,
    timer: newTimer,
    queue: newQueue,
  };

  return rideObj;
}

export function seedRide(rideObj: RideHubObj) {
  // setup Park Classes and connect
}
