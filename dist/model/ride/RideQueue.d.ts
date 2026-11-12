import type { Ride } from "./Ride.js";
import type { Rider } from "./Rider.js";
export declare class RideQueue {
    #private;
    constructor(ride: Ride);
    get ride(): Ride;
    set ride(newRide: Ride);
    get head(): Rider | null;
    set head(newHead: Rider | null);
    get tail(): Rider | null;
    set tail(newTail: Rider | null);
    log(): void;
}
//# sourceMappingURL=RideQueue.d.ts.map