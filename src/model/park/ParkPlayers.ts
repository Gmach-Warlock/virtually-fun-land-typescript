import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
import type { Contestant } from "../game/Contestant.js";
import type { GameContestants } from "../game/GameContestants.js";
import { Park } from "./Park.js";

export class ParkPlayers {
  static #instance: ParkPlayers | null = null;
  #park: Park | undefined;
  #contestants: GameContestants[] | undefined;

  constructor() {
    this.#contestants = [];
  }

  get park() {
    return this.#park;
  }
  set park(newPark: Park | undefined) {
    this.#park = newPark;
  }
  get contestants() {
    return this.#contestants;
  }
  set contestants(newContestants: GameContestants[] | undefined) {
    this.#contestants = newContestants;
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new ParkPlayers();
    }
    return this.#instance;
  }

  add(gameContestants: GameContestants) {
    this.#contestants = addItemToArray(
      this.#contestants ?? [],
      gameContestants,
    );
  }

  log() {
    console.log(
      `Welcome to the Players Club. View High Scores here and show your clout!`,
    );
    this.#contestants?.forEach((group: GameContestants) =>
      console.log(`${group.head?.guest.name}`),
    );
  }
}

export const vflPlayersClub = ParkPlayers.getInstance();
