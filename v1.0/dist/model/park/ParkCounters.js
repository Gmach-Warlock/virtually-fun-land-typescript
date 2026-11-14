import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
import { vfl } from "./Park.js";
export class ParkCounters {
    static #instance = null;
    #park;
    counters;
    constructor() {
        this.#park = vfl;
        this.counters = [];
    }
    get park() {
        return this.#park;
    }
    static getInstance() {
        if (this.#instance === null) {
            this.#instance = new ParkCounters();
        }
        return this.#instance;
    }
    add(counter) {
        this.counters = addItemToArray(this.counters ?? [], counter);
    }
}
export const vflCounters = ParkCounters.getInstance();
//# sourceMappingURL=ParkCounters.js.map