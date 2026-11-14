import { Park } from "./Park.js";
import { type ParkCounters } from "./ParkCounters.js";
import { type ParkQueues } from "./ParkQueues.js";
import { type ParkTimers } from "./ParkTimers.js";
export declare class ParkManager {
    #private;
    counters: ParkCounters | undefined;
    timers: ParkTimers | undefined;
    queues: ParkQueues | undefined;
    constructor();
    get park(): Park | undefined;
    static getInstance(): ParkManager;
}
export declare const vflManager: ParkManager;
//# sourceMappingURL=ParkManager.d.ts.map