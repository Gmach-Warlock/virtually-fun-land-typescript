import type { Park } from "./Park.js";
export declare class ParkQueues {
    #private;
    constructor();
    get park(): Park | undefined;
    set park(newPark: Park | undefined);
    get queues(): ParkQueues[] | undefined;
    set queues(newQueues: ParkQueues[] | undefined);
    static getInstance(): ParkQueues;
}
export declare const vflQueues: ParkQueues;
//# sourceMappingURL=ParkQueues.d.ts.map