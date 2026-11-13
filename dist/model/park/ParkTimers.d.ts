import type { RideTimer } from "../ride/RideTimer.js";
import { type Park } from "./Park.js";
export declare class ParkTimers {
    #private;
    constructor();
    get park(): Park | undefined;
    set park(newPark: Park | undefined);
    get timers(): RideTimer[] | undefined;
    set timers(newTimers: RideTimer[] | undefined);
    static getInstance(): ParkTimers;
    add(timer: RideTimer): void;
}
export declare const vflTimers: ParkTimers;
//# sourceMappingURL=ParkTimers.d.ts.map