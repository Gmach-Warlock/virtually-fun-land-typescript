import type { ParkInstance, ParkArrays } from "../types/gameTypeDefs.js";
export declare class Park implements ParkInstance {
    #private;
    id: string;
    name: string;
    arrays: ParkArrays;
    constructor();
    static getInstance(): Park;
    log(): void;
    open(): void;
}
//# sourceMappingURL=Park.d.ts.map