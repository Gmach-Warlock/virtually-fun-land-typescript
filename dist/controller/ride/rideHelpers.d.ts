import type { Guest } from "../../model/guest/Guest.js";
import type { Ride } from "../../model/ride/Ride.js";
import type { RideCounter } from "../../model/ride/RideCounter.js";
import { Rider } from "../../model/ride/Rider.js";
export declare function createRider(ride: Ride, guest: Guest): Rider;
export declare function enqueueHelper(guest: Guest, ride: Ride, counter: RideCounter, head: Rider, tail: Rider): void;
//# sourceMappingURL=rideHelpers.d.ts.map