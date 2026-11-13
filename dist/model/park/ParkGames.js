import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
import { vfl } from "./Park.js";
export class ParkGames {
    static #instance = null;
    #park;
    #games;
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
    set games(newGames) {
        this.#games = newGames;
    }
    static getInstance() {
        if (this.#instance === null) {
            this.#instance = new ParkGames();
        }
        return this.#instance;
    }
    add(game) {
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
//# sourceMappingURL=ParkGames.js.map