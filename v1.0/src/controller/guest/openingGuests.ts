import { vflRides } from "../../model/park/ParkRides.js";
import type { Ride } from "../../model/ride/Ride.js";

export function logRush() {
  console.log(`The guests race towards their favorite attractions!.`);
  vflRides.rides.forEach((ride: Ride) => {
    console.log(ride.queue?.log());
  });
}
