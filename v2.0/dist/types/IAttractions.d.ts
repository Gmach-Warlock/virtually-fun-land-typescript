import type { GuestInstance, Personality } from "./IGuest.js";
import type { QueueInstance } from "./IQueue.js";
export interface Identify {
    id: string;
    name: string;
}
export interface Describe {
    description: string;
}
export interface Metrics {
    duration: number;
    perTurn: number;
    max: number;
}
export interface RideInfo extends GeneralInfo, Metrics {
}
export type AttractionType = "ride" | "show" | "game";
export type RideCategory = "roller coaster" | "water ride" | "family ride";
export type GameCategory = "chance" | "turn-based";
export type ShowCategory = "family show" | "adult show";
export type AttractionCategory = RideCategory | GameCategory | ShowCategory;
export type LookupType = AttractionType | Personality;
export interface TypeInfoObj {
    type: LookupType;
    category: AttractionCategory;
}
export interface GeneralInfo extends Identify, Describe, TypeInfoObj {
}
export interface Attraction {
    general: GeneralInfo;
    metrics: Metrics;
    queue: QueueInstance<GuestInstance> | null;
}
//# sourceMappingURL=IAttractions.d.ts.map