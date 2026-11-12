import { type Park } from "./Park.js";
export declare class ParkTimers {
    #private;
    constructor();
    get park(): Park | undefined;
    set park(newPark: Park | undefined);
    get timers(): ParkTimers[] | undefined;
    set timers(newTimers: ParkTimers[] | undefined);
    static getInstance(): ParkTimers;
}
export declare const vflTimers: ParkTimers;
//# sourceMappingURL=ParkTimers.d.ts.map