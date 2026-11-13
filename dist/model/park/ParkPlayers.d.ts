import type { GameContestants } from "../game/GameContestants.js";
import { Park } from "./Park.js";
export declare class ParkPlayers {
    #private;
    constructor();
    get park(): Park | undefined;
    set park(newPark: Park | undefined);
    get contestants(): GameContestants[] | undefined;
    set contestants(newContestants: GameContestants[] | undefined);
    static getInstance(): ParkPlayers;
    add(gameContestants: GameContestants): void;
    log(): void;
}
export declare const vflPlayersClub: ParkPlayers;
//# sourceMappingURL=ParkPlayers.d.ts.map