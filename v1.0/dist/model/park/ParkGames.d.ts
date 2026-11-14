import type { Game } from "../game/Game.js";
import { type Park } from "./Park.js";
export declare class ParkGames {
    #private;
    games: Game[] | undefined;
    constructor();
    get park(): Park | undefined;
    static getInstance(): ParkGames;
    add(game: Game): void;
    log(): void;
}
export declare const vflGames: ParkGames;
//# sourceMappingURL=ParkGames.d.ts.map