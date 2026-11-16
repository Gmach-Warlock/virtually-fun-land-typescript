import type { Attraction, GeneralInfo, Metrics, AttractionCategory, LookupType } from "../types/attractionsTypeDefs.js";
import type { GuestInstance } from "../types/guestTypeDefs.js";
import type { QueueInstance } from "../types/queuTypeDefs.ts.js";
export declare class Show implements Attraction {
    general: GeneralInfo;
    metrics: Metrics;
    queue: QueueInstance<GuestInstance> | null;
    constructor(id: string, name: string, description: string, category: AttractionCategory, duration: number, type: LookupType, perTurn: number, max: number);
    log(): void;
}
//# sourceMappingURL=Show.d.ts.map