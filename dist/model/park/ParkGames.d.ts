import type { Game } from "../game/Game.js";
import { type Park } from "./Park.js";
export declare class ParkGames {
    #private;
    constructor();
    get park(): Park | undefined;
    get games(): Game[];
    set games(newGames: Game[]);
    static getInstance(): ParkGames;
    add(game: Game): void;
    log(): void;
}
export declare const vflGames: ParkGames;
//# sourceMappingURL=ParkGames.d.ts.map