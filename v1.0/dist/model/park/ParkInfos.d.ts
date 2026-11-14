import type { RideInfo } from "../ride/RideInfo.js";
import { type Park } from "./Park.js";
export declare class ParkInfos {
    #private;
    infos: RideInfo[];
    constructor();
    get park(): Park;
    static getInstance(): ParkInfos;
    add(info: RideInfo): void;
}
export declare const vflInfos: ParkInfos;
//# sourceMappingURL=ParkInfos.d.ts.map