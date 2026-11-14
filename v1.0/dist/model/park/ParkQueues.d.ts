import type { RideQueue } from "../ride/RideQueue.js";
import { type Park } from "./Park.js";
export declare class ParkQueues {
    #private;
    queues: RideQueue[] | undefined;
    constructor();
    get park(): Park | undefined;
    set park(newPark: Park | undefined);
    static getInstance(): ParkQueues;
    add(queue: RideQueue): void;
    log(): void;
}
export declare const vflQueues: ParkQueues;
//# sourceMappingURL=ParkQueues.d.ts.map