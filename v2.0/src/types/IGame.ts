import type { IAttraction, IIdentify } from "./IAttractions.js";
import type { IGuest } from "./IGuest.js";

export interface IGame extends IAttraction {}
export interface IScoreBoard {
  highScore: number;
  currentScore: number;
}
export interface IPark extends IIdentify {
  arrays: IParkArrays;
}

export interface IParkArrays {
  rides: IAttraction[];
  games: IAttraction[];
  shows: IAttraction[];
  guests: IGuest[];
}
