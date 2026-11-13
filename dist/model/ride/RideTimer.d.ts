import type { Ride } from "./Ride.js";
export declare class RideTimer {
    #private;
    constructor(ride: Ride, duration: number);
    get ride(): Ride;
    set ride(newRide: Ride);
    get duration(): number;
    set duration(newDuration: number);
    log(): void;
}
//# sourceMappingURL=RideTimer.d.ts.map