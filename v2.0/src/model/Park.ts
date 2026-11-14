import type { IGuest } from "../types/IGuest.js";
import type { IAttraction } from "../types/IAttractions.js";
import { buildGuests } from "../controller/openinig/openingBuild2.js";
import {
  buildGames,
  buildRides,
  buildShows,
} from "../controller/openinig/openingBuild.js";
import { linkAttractions } from "../controller/openinig/linkAttractions.js";
import { ParkOpeningTimeouts } from "../features/FTimers.js";
import type { IPark, IParkArrays } from "../types/IGame.js";

export class Park implements IPark {
  static #instance: Park | null = null;
  id: string = "VFL-park";
  name: string = "Virtually Fun Land";
  arrays: IParkArrays;

  constructor() {
    this.arrays = {
      rides: buildRides(),
      games: buildGames(),
      guests: buildGuests(),
      shows: buildShows(),
    };
    linkAttractions(this.arrays.rides, this.arrays.games, this.arrays.shows);
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new Park();
    }
    return this.#instance;
  }

  open() {
    ParkOpeningTimeouts();
  }
}
