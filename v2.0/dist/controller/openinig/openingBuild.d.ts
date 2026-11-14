import { Ride } from "../../model/Ride.js";
import { Game } from "../../model/Game.js";
import { Show } from "../../model/Show.js";
import { type IGameInfo } from "../../assets/vflGames.js";
import type { IRideInfo } from "../../types/IAttractions.js";
import { type IShowInfo } from "../../assets/vflShows.js";
export declare function buildRides(): Ride[];
export declare function buildGames(): Game[];
export declare function buildShows(): Show[];
export type IAttractionInfo = IRideInfo | IGameInfo | IShowInfo;
//# sourceMappingURL=openingBuild.d.ts.map