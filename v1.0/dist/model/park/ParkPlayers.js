import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
import { Park } from "./Park.js";
export class ParkPlayers {
    static #instance = null;
    #park;
    contestants;
    constructor() {
        this.contestants = [];
    }
    get park() {
        return this.#park;
    }
    set park(newPark) {
        this.#park = newPark;
    }
    static getInstance() {
        if (this.#instance === null) {
            this.#instance = new ParkPlayers();
        }
        return this.#instance;
    }
    add(gameContestants) {
        this.contestants = addItemToArray(this.contestants ?? [], gameContestants);
    }
    log() {
        console.log(`Welcome to the Players Club. View High Scores here and show your clout!`);
        this.contestants?.forEach((group) => console.log(`${group.head?.guest.name}`));
    }
}
export const vflPlayersClub = ParkPlayers.getInstance();
//# sourceMappingURL=ParkPlayers.js.map