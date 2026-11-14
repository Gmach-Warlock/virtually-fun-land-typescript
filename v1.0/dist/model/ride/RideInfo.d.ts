import type { RideType } from "../../types/ride/rideTypes.js";
import type { Ride } from "./Ride.js";
export declare class RideInfo {
    #private;
    constructor(ride: Ride, name: string, description: string, type: RideType, occupancy: number);
    get ride(): Ride;
    set ride(newRide: Ride);
    get name(): string;
    set name(newName: string);
    get description(): string;
    set description(newDesc: string);
    get type(): RideType;
    set type(newType: RideType);
    get occupancy(): number;
    set occupancy(newOccupancy: number);
    log(): void;
}
//# sourceMappingURL=RideInfo.d.ts.map