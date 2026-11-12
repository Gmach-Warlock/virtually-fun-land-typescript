import { Park } from "./Park.js";
import { type ParkCounters } from "./ParkCounters.js";
import { type ParkQueues } from "./ParkQueues.js";
import { type ParkTimers } from "./ParkTimers.js";
export declare class ParkManager {
    #private;
    constructor();
    get park(): Park | undefined;
    get counters(): ParkCounters | undefined;
    get timers(): ParkTimers | undefined;
    get queues(): ParkQueues | undefined;
    static getInstance(): ParkManager;
}
export declare const vflManager: ParkManager;
//# sourceMappingURL=ParkManager.d.ts.map