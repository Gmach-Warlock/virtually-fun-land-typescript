import type { Game } from "./Game.js";

export class GameInfo {
  #game: Game;
  #name: string;
  #description: string;
  #duration: number;

  constructor(game: Game, name: string, description: string, duration: number) {
    this.#game = game;
    this.#name = name;
    this.#description = description;
    this.#duration = duration;
  }

  get game() {
    return this.#game;
  }
  get name() {
    return this.#name;
  }
  get description() {
    return this.#description;
  }
  get duration() {
    return this.#duration;
  }
}
