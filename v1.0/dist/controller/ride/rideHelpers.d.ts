import { Guest } from "../../model/guest/Guest.js";
import { Ride } from "../../model/ride/Ride.js";
import { Rider } from "../../model/ride/Rider.js";
export declare function createRider(ride: Ride, guest: Guest): Rider;
export declare function enqueueHelper(guest: Guest, ride: Ride): void;
export declare function dequeuHelper(ride: Ride): void;
export declare function jumpHelper(ride: Ride, guest: Guest): void;
//# sourceMappingURL=rideHelpers.d.ts.map