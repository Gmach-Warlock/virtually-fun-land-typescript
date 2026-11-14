import type { RideTimer } from "../ride/RideTimer.js";
import { type Park } from "./Park.js";
export declare class ParkTimers {
    #private;
    timers: RideTimer[] | undefined;
    constructor();
    get park(): Park | undefined;
    set park(newPark: Park | undefined);
    static getInstance(): ParkTimers;
    add(timer: RideTimer): void;
}
export declare const vflTimers: ParkTimers;
//# sourceMappingURL=ParkTimers.d.ts.map