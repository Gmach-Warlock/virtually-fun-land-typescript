import { Game } from "../../model/game/Game.js";
import type { GameContestants } from "../../model/game/GameContestants.js";
import type { GameCounter } from "../../model/game/GameCounter.js";
import { GameInfo } from "../../model/game/GameInfo.js";

export interface GameInfoObj {
  id: string;
  name: string;
  description: string;
  duration: number;
  occupancy: number;
  max: number;
}

export interface GameHubObj {
  game: Game;
  info: GameInfo;
  contestants: GameContestants;
  counter: GameCounter;
}
