import type { Ride } from "./Ride.js";
export declare class RideCounter {
    #private;
    constructor(ride: Ride, max: number);
    get ride(): Ride;
    set ride(newRide: Ride);
    get count(): number;
    set count(newCount: number);
    get max(): number;
    set max(newMax: number);
}
//# sourceMappingURL=RideCounter.d.ts.map