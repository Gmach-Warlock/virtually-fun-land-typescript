import type { Guest } from "../guest/Guest.js";
import type { Ride } from "./Ride.js";
export declare class Rider {
    #private;
    constructor(ride: Ride, guest: Guest);
    get ride(): Ride;
    set ride(newRide: Ride);
    get guest(): Guest;
    set guest(newGuest: Guest);
    get next(): Rider | null;
    set next(newNext: Rider | null);
    log(): void;
}
//# sourceMappingURL=Rider.d.ts.map