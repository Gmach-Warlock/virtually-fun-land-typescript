import type { GameContestants } from "../game/GameContestants.js";
import { Park } from "./Park.js";
export declare class ParkPlayers {
    #private;
    contestants: GameContestants[] | undefined;
    constructor();
    get park(): Park | undefined;
    set park(newPark: Park | undefined);
    static getInstance(): ParkPlayers;
    add(gameContestants: GameContestants): void;
    log(): void;
}
export declare const vflPlayersClub: ParkPlayers;
//# sourceMappingURL=ParkPlayers.d.ts.map