import { vfl } from "./Park.js";
export class ParkTimers {
    #park;
    #timers;
    static #instance = null;
    constructor() {
        this.#park = vfl;
        this.#timers = [];
    }
    get park() {
        return this.#park;
    }
    set park(newPark) {
        this.#park = newPark;
    }
    get timers() {
        return this.#timers;
    }
    set timers(newTimers) {
        this.#timers = newTimers;
    }
    static getInstance() {
        if (this.#instance === null) {
            this.#instance = new ParkTimers();
        }
        return this.#instance;
    }
}
export const vflTimers = ParkTimers.getInstance();
//# sourceMappingURL=ParkTimers.js.map