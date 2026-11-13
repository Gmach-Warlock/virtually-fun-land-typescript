import type { RideInfo } from "../ride/RideInfo.js";
import { type Park } from "./Park.js";
export declare class ParkInfos {
    #private;
    constructor();
    get park(): Park;
    get infos(): RideInfo[];
    set infos(newInfos: RideInfo[]);
    static getInstance(): ParkInfos;
    add(info: RideInfo): void;
}
export declare const vflInfos: ParkInfos;
//# sourceMappingURL=ParkInfos.d.ts.map