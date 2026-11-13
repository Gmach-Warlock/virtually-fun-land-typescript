import type { Guest } from "../guest/Guest.js";
import { Contestant } from "./Contestant.js";
import type { Game } from "./Game.js";
export declare class GameContestants {
    #private;
    constructor(game: Game);
    get game(): Game;
    get head(): Contestant | null;
    set head(newHead: Contestant | null);
    get tail(): Contestant | null;
    set tail(newTail: Contestant | null);
    dequeue(): void;
    enqueue(guest: Guest): void;
    log(): void;
}
//# sourceMappingURL=GameContestants.d.ts.map