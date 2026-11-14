import { buildGuests } from "../controller/openinig/openingBuild2.js";
import { buildGames, buildRides, buildShows, } from "../controller/openinig/openingBuild.js";
import { linkAttractions } from "../controller/openinig/linkAttractions.js";
import { ParkOpeningTimeouts } from "../features/FTimers.js";
export class Park {
    static #instance = null;
    id = "VFL-park";
    name = "Virtually Fun Land";
    arrays;
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
//# sourceMappingURL=Park.js.map