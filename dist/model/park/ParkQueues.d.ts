import type { RideQueue } from "../ride/RideQueue.js";
import { type Park } from "./Park.js";
export declare class ParkQueues {
    #private;
    constructor();
    get park(): Park | undefined;
    set park(newPark: Park | undefined);
    get queues(): RideQueue[] | undefined;
    set queues(newQueues: RideQueue[] | undefined);
    static getInstance(): ParkQueues;
    add(queue: RideQueue): void;
    log(): void;
}
export declare const vflQueues: ParkQueues;
//# sourceMappingURL=ParkQueues.d.ts.map