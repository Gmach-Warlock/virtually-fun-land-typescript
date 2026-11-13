import type { RideHubObj, RideInfoObj } from "../../types/rideInterfaces.js";
export declare function createRideHub({ id, name, description, duration, max, type, occupancy, }: RideInfoObj): RideHubObj;
export declare function createRides(): RideHubObj[] | undefined;
export declare function hydrateRide(rideObj: RideHubObj): void;
export declare function buildRides(): void;
export declare function seedInstance(): void;
//# sourceMappingURL=createRides.d.ts.map