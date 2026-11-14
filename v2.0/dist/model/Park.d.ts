import type { IPark, IParkArrays } from "../types/IGame.js";
export declare class Park implements IPark {
    #private;
    id: string;
    name: string;
    arrays: IParkArrays;
    constructor();
    static getInstance(): Park;
    open(): void;
}
//# sourceMappingURL=Park.d.ts.map