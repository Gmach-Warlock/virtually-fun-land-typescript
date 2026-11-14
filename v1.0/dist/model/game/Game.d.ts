import type { GameContestants } from "./GameContestants.js";
import type { GameCounter } from "./GameCounter.js";
import type { GameInfo } from "./GameInfo.js";
export declare class Game {
    #private;
    constructor(id: string);
    get id(): string;
    get info(): GameInfo | undefined;
    set info(newInfo: GameInfo | undefined);
    get counter(): GameCounter | undefined;
    set counter(newCounter: GameCounter | undefined);
    get contestants(): GameContestants | undefined;
    set contestants(newContestants: GameContestants | undefined);
    log(): void;
}
//# sourceMappingURL=Game.d.ts.map