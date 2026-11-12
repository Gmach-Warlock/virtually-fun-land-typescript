import type { Park } from "./Park.js";
export declare class ParkCounters {
    #private;
    constructor();
    get park(): Park | undefined;
    get counters(): ParkCounters[] | undefined;
    set counters(newCounters: ParkCounters[] | undefined);
    static getInstance(): ParkCounters;
}
export declare const vflCounters: ParkCounters;
//# sourceMappingURL=ParkCounters.d.ts.map