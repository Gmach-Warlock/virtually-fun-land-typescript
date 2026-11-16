import { Ride } from "../../model/Ride.js";
import { Game } from "../../model/Game.js";
import { Show } from "../../model/Show.js";
import { type GameInfo } from "../../assets/vflGames.js";
import type { RideInfo } from "../../types/attractionsTypeDefs.js";
import { type ShowInfo } from "../../assets/vflShows.js";
export declare function buildRides(): Ride[];
export declare function buildGames(): Game[];
export declare function buildShows(): Show[];
export type AttractionInfo = RideInfo | GameInfo | ShowInfo;
//# sourceMappingURL=openingBuild.d.ts.map