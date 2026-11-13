import { commandLineCoasterInfo, rideInfoArr } from "../../assets/vflRides.js";
import { vflCounters } from "../../model/park/ParkCounters.js";
import { vflInfos } from "../../model/park/ParkInfos.js";
import { vflQueues } from "../../model/park/ParkQueues.js";
import { vflRides } from "../../model/park/ParkRides.js";
import { vflTimers } from "../../model/park/ParkTimers.js";
import { Ride } from "../../model/ride/Ride.js";
import { RideCounter } from "../../model/ride/RideCounter.js";
import { RideInfo } from "../../model/ride/RideInfo.js";
import { RideQueue } from "../../model/ride/RideQueue.js";
import { RideTimer } from "../../model/ride/RideTimer.js";
import type { RideHubObj, RideInfoObj } from "../../types/rideInterfaces.js";

export function createRideHub({
  id,
  name,
  description,
  duration,
  max,
  type,
  occupancy,
}: RideInfoObj) {
  const newRide = new Ride(id);
  const newInfo = new RideInfo(newRide, name, description, type, occupancy);
  const newCounter = new RideCounter(newRide, max);
  const newTimer = new RideTimer(newRide, duration);
  const newQueue = new RideQueue(newRide);
  newRide.counter = newCounter;
  newRide.timer = newTimer;
  newRide.queue = newQueue;
  newRide.info = newInfo;
  const rideObj: RideHubObj = {
    ride: newRide,
    info: newInfo,
    counter: newCounter,
    timer: newTimer,
    queue: newQueue,
  };

  return rideObj;
}

export function createRides() {
  const rideHubs = rideInfoArr.map((ride: RideInfoObj) => {
    return createRideHub(ride);
  });
  if (!rideHubs) return;
  return rideHubs;
}

export function hydrateRide(rideObj: RideHubObj) {
  vflRides.add(rideObj.ride);
  vflInfos.add(rideObj.info);
  vflCounters.add(rideObj.counter);
  vflTimers.add(rideObj.timer);
  vflQueues.add(rideObj.queue);
}

export function buildRides() {
  const hubs = createRides();
  hubs?.forEach((hub) => hydrateRide(hub));
  vflRides.log();
}

// CREATE SOME RIDES STILL!!!

export function seedInstance() {
  // setup Park Classes and connect
}
