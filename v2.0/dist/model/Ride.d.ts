import type { IAttraction, IGeneral, IMetrics, TCategory, TType } from "../types/IAttractions.js";
import type { IGuest } from "../types/IGuest.js";
import type { IQueue } from "../types/IQueue.js";
export declare class Ride implements IAttraction {
    general: IGeneral;
    metrics: IMetrics;
    queue: IQueue<IGuest> | null;
    constructor(id: string, name: string, description: string, category: TCategory, duration: number, type: TType, perTurn: number, max: number);
    log(): void;
}
//# sourceMappingURL=Ride.d.ts.map