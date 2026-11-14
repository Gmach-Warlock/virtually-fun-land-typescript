import type { IGame } from "../types/IGame.js";
import type { IGeneral, IMetrics, TCategory, TType } from "../types/IAttractions.js";
import type { IQueue } from "../types/IQueue.js";
import type { IGuest } from "../types/IGuest.js";
export declare class Game implements IGame {
    general: IGeneral;
    metrics: IMetrics;
    queue: IQueue<IGuest> | null;
    constructor(id: string, name: string, description: string, category: TCategory, duration: number, type: TType, perTurn: number, max: number);
    log(): void;
}
//# sourceMappingURL=Game.d.ts.map