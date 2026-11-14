import type { ParkBuilder } from "../../types/basic/basicInterfaces.js";
export declare class Park {
    #private;
    name: string;
    counters: ParkBuilder["counters"] | undefined;
    queues: ParkBuilder["queues"] | undefined;
    timers: ParkBuilder["timers"] | undefined;
    constructor();
    static getInstance(): Park;
    build(buildObj: ParkBuilder): void;
    log(): void;
}
export declare const vfl: Park;
//# sourceMappingURL=Park.d.ts.map