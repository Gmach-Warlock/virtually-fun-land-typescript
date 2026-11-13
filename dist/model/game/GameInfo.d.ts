import type { Game } from "./Game.js";
export declare class GameInfo {
    #private;
    constructor(game: Game, name: string, description: string, duration: number);
    get game(): Game;
    get name(): string;
    get description(): string;
    get duration(): number;
}
//# sourceMappingURL=GameInfo.d.ts.map