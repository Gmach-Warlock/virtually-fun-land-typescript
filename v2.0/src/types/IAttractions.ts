import type { IGuest, TPersonality } from "./IGuest.js";
import type { IQueue } from "./IQueue.js";

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
export interface IRideInfo extends IGeneral, IMetrics {}
export type TAttraction = "ride" | "show" | "game";
export type TRideCategory = "roller coaster" | "water ride" | "family ride";
export type TGameCategory = "chance" | "turn-based";
export type TShowCategory = "family show" | "adult show";
export type TCategory = TRideCategory | TGameCategory | TShowCategory;
export type TType = TAttraction | TPersonality;
export interface IType {
  type: TType;
  category: TCategory;
}
export interface IGeneral extends IIdentify, IDescribe, IType {}
export interface IAttraction {
  general: IGeneral;
  metrics: IMetrics;
  queue: IQueue<IGuest> | null;
}
