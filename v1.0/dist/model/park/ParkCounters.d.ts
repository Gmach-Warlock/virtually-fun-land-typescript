import type { RideCounter } from "../ride/RideCounter.js";
import { type Park } from "./Park.js";
export declare class ParkCounters {
    #private;
    counters: RideCounter[] | undefined;
    constructor();
    get park(): Park | undefined;
    static getInstance(): ParkCounters;
    add(counter: RideCounter): void;
}
export declare const vflCounters: ParkCounters;
//# sourceMappingURL=ParkCounters.d.ts.map