import { Ride } from "../../model/ride/Ride.js";
import { RideTimer } from "../../model/ride/RideTimer.js";
import { RideQueue } from "../../model/ride/RideQueue.js";
import { RideCounter } from "../../model/ride/RideCounter.js";
import type { RideInfo } from "../../model/ride/RideInfo.js";
import type { RideType } from "./rideTypes.js";

export interface RideInfoObj {
  id: string;
  name: string;
  description: string;
  type: RideType;
  duration: number;
  max: number;
  occupancy: number;
}

export interface RideHubObj {
  ride: Ride;
  info: RideInfo;
  counter: RideCounter;
  timer: RideTimer;
  queue: RideQueue;
}
