import { vflGamesArr } from "../../assets/vflGames.js";
import { Game } from "../../model/game/Game.js";
import { GameContestants } from "../../model/game/GameContestants.js";
import { GameCounter } from "../../model/game/GameCounter.js";
import { GameInfo } from "../../model/game/GameInfo.js";
import { vflGames } from "../../model/park/ParkGames.js";
import { vflPlayersClub } from "../../model/park/ParkPlayers.js";
export function createGameHub(infoObj) {
    const newGame = new Game(infoObj.id);
    const newInfo = new GameInfo(newGame, infoObj.name, infoObj.description, infoObj.duration);
    const newCounter = new GameCounter(newGame, infoObj.max);
    const newContestants = new GameContestants(newGame);
    newGame.info = newInfo;
    newGame.counter = newCounter;
    newGame.contestants = newContestants;
    return {
        game: newGame,
        info: newInfo,
        contestants: newContestants,
        counter: newCounter,
    };
}
function seedGame(infoObj) {
    vflGames.add(infoObj.game);
    vflPlayersClub.add(infoObj.contestants);
}
export function buildGames() {
    const gameHubs = vflGamesArr.map((obj) => {
        return createGameHub(obj);
    });
    gameHubs.forEach((game) => seedGame(game));
    vflGames.log();
    return gameHubs;
}
//# sourceMappingURL=gameBuild.js.map