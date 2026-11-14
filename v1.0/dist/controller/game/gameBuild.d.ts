import { Game } from "../../model/game/Game.js";
import { GameContestants } from "../../model/game/GameContestants.js";
import { GameCounter } from "../../model/game/GameCounter.js";
import { GameInfo } from "../../model/game/GameInfo.js";
import type { GameInfoObj } from "../../types/game/gameInterfaces.js";
export declare function createGameHub(infoObj: GameInfoObj): {
    game: Game;
    info: GameInfo;
    contestants: GameContestants;
    counter: GameCounter;
};
export declare function buildGames(): {
    game: Game;
    info: GameInfo;
    contestants: GameContestants;
    counter: GameCounter;
}[];
//# sourceMappingURL=gameBuild.d.ts.map