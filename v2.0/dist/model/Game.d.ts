import type { GameInstance } from "../types/gameTypeDefs.js";
import type { GeneralInfo, Metrics, AttractionCategory, LookupType } from "../types/attractionsTypeDefs.js";
import type { QueueInstance, WaitingGuest } from "../types/queuTypeDefs.ts.js";
export declare class Game implements GameInstance {
    general: GeneralInfo;
    metrics: Metrics;
    queue: QueueInstance<WaitingGuest> | null;
    interval: NodeJS.Timeout | null;
    constructor(id: string, name: string, description: string, category: AttractionCategory, duration: number, type: LookupType, perTurn: number, max: number);
    log(): void;
}
//# sourceMappingURL=Game.d.ts.map