import type { Ride } from "../ride/Ride.js";
import { type Park } from "./Park.js";
export declare class ParkRides {
    #private;
    constructor();
    get park(): Park;
    set park(newPark: Park);
    get rides(): Ride[];
    set rides(newRides: Ride[]);
    static getInstance(): ParkRides;
    add(ride: Ride): void;
    log(): void;
}
export declare const vflRides: ParkRides;
//# sourceMappingURL=ParkRides.d.ts.map