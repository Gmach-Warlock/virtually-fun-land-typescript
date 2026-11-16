import { buildGuests } from "../controller/openinig/openingBuild2.js";
import {
  buildGames,
  buildRides,
  buildShows,
} from "../controller/openinig/openingBuild.js";
import { linkAttractions } from "../controller/openinig/linkAttractions.js";
import { ParkOpeningTimeouts } from "../features/FTimers.js";
import type { ParkInstance, ParkArrays } from "../types/gameTypeDefs.js";
import { logLine } from "../view/prompts/logLines.js";
export class Park implements ParkInstance {
  static #instance: Park | null = null;
  id: string = "VFL-park";
  name: string = "Virtually Fun Land";
  arrays: ParkArrays;

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

  log() {
    this.arrays.games.forEach((game) => {
      if (game.queue) {
        logLine(game.queue as any);
      }
    });
    this.arrays.rides.forEach((ride) => {
      if (ride.queue) {
        logLine(ride.queue as any);
      }
    });
    this.arrays.shows.forEach((show) => {
      if (show.queue) {
        logLine(show.queue as any);
      }
    });
  }
  open() {
    ParkOpeningTimeouts();
  }
}
