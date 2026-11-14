import type { TPersonality } from "../guests/IGuest.js";
export interface IIdentify {
    id: string;
    name: string;
}
export interface IDescribe {
    description: string;
}
export interface IMetrics {
    duration: number;
    perTurn: number;
    max: number;
}
export interface IRideInfo extends IGeneral, IMetrics {
}
export type TAttraction = "ride" | "show" | "game";
export type TRideCategory = "roller coaster" | "water ride" | "family ride";
export type TGameCategory = "chance" | "turn-based";
export type TCategory = TRideCategory | TGameCategory;
export type TType = TAttraction | TPersonality;
export interface IType {
    type: TType;
    category: TCategory;
}
export interface IGeneral extends IIdentify, IDescribe, IType {
}
export interface IAttraction {
    general: IGeneral;
    metrics: IMetrics;
}
//# sourceMappingURL=IGame.d.ts.map