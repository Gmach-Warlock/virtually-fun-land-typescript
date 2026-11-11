import type { Guest } from "../guest/Guest.js";
import type { Ride } from "./Ride.js";
export declare class Rider {
    #private;
    constructor(ride: Ride, guest: Guest);
    get ride(): Ride;
    set ride(newRide: Ride);
    get guest(): Guest;
    set guest(newGuest: Guest);
}
//# sourceMappingURL=Rider.d.ts.map