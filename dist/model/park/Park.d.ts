import type { ParkBuilder } from "../../types/basicInterfaces.js";
export declare class Park {
    #private;
    constructor();
    get name(): string;
    get counters(): ParkBuilder["counters"] | undefined;
    set counters(newCounters: ParkBuilder["counters"] | undefined);
    get queues(): ParkBuilder["queues"] | undefined;
    set queues(newQueues: ParkBuilder["queues"] | undefined);
    get timers(): ParkBuilder["timers"] | undefined;
    set timers(newTimers: ParkBuilder["timers"] | undefined);
    static getInstance(): Park;
    build(buildObj: ParkBuilder): void;
}
export declare const vfl: Park;
//# sourceMappingURL=Park.d.ts.map