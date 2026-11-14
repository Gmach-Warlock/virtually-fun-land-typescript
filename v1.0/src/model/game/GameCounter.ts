import { Game } from "./Game.js";

export class GameCounter {
  #game: Game | undefined;
  #count: number | undefined;
  #max: number | undefined;

  constructor(game: Game, max: number) {
    this.#game = game;
    this.#max = max;
  }

  get game() {
    return this.#game;
  }
  get count() {
    return this.#count;
  }
  set count(newCount) {
    this.#count = newCount;
  }
  get max(): number | undefined {
    return this.#max;
  }
  set max(newMax: number) {
    this.#max = newMax;
  }
}
