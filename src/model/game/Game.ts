import type { GameContestants } from "./GameContestants.js";
import type { GameCounter } from "./GameCounter.js";
import type { GameInfo } from "./GameInfo.js";

export class Game {
  #id: string;
  #info: GameInfo | undefined;
  #counter: GameCounter | undefined;
  #contestants: GameContestants | undefined;

  constructor(id: string) {
    this.#id = id;
  }

  get id() {
    return this.#id;
  }
  get info(): GameInfo | undefined {
    return this.#info;
  }
  set info(newInfo: GameInfo | undefined) {
    this.#info = newInfo;
  }
  get counter(): GameCounter | undefined {
    return this.#counter;
  }
  set counter(newCounter: GameCounter | undefined) {
    this.#counter = newCounter;
  }
  get contestants(): GameContestants | undefined {
    return this.#contestants;
  }
  set contestants(newContestants: GameContestants | undefined) {
    this.#contestants = newContestants;
  }

  log() {
    console.log(`Step right up and play ${this.#info?.name}!
${this.info?.description}. Anyone can win!! Try to become our leader of the day!!
`);
  }
}
