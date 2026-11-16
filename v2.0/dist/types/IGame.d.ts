import type { Attraction, Identify } from "./AttractionsTypeDefs.js";
import type { GuestInstance } from "./IGuest.js";
export interface GameInstance extends Attraction {
}
export interface ScoreBoard {
    highScore: number;
    currentScore: number;
}
export interface ParkInstance extends Identify {
    arrays: ParkArrays;
}
export interface ParkArrays {
    rides: Attraction[];
    games: Attraction[];
    shows: Attraction[];
    guests: GuestInstance[];
}
//# sourceMappingURL=IGame.d.ts.map