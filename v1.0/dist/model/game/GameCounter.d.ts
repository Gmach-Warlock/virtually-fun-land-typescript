import { Game } from "./Game.js";
export declare class GameCounter {
    #private;
    constructor(game: Game, max: number);
    get game(): Game | undefined;
    get count(): number | undefined;
    set count(newCount: number | undefined);
    get max(): number | undefined;
    set max(newMax: number);
}
//# sourceMappingURL=GameCounter.d.ts.map