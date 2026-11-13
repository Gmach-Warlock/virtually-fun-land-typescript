import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
import type { Game } from "../game/Game.js";
import { vfl, type Park } from "./Park.js";

export class ParkGames {
  static #instance: ParkGames | null = null;
  #park: Park | undefined;
  #games: Game[] | undefined;

  constructor() {
    this.#park = vfl;
    this.#games = [];
  }

  get park() {
    return this.#park;
  }
  get games() {
    return this.#games ?? [];
  }
  set games(newGames: Game[]) {
    this.#games = newGames;
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new ParkGames();
    }
    return this.#instance;
  }

  add(game: Game) {
    this.#games = addItemToArray(this.#games ?? [], game);
  }
  log() {
    console.log(`Virtually Fun Land's Games have opened up as well! 
`);
    this.#games?.forEach((game) => game.log());
    console.log(`
-   -   -   -   -   -   -   -   -   -   -   -   -   -`);
  }
}

export const vflGames = ParkGames.getInstance();
