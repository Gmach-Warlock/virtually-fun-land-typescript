import type { Ride } from "../ride/Ride.js";
import { type Park } from "./Park.js";
export declare class ParkRides {
    #private;
    rides: Ride[];
    constructor();
    get park(): Park;
    set park(newPark: Park);
    static getInstance(): ParkRides;
    add(ride: Ride): void;
    log(): void;
}
export declare const vflRides: ParkRides;
//# sourceMappingURL=ParkRides.d.ts.map