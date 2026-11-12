import { vfl } from "./Park.js";
export class ParkRides {
    #park;
    #rides;
    static #instance = null;
    constructor() {
        this.#park = vfl;
        this.#rides = [];
    }
    get park() {
        return this.#park;
    }
    set park(newPark) {
        this.#park = newPark;
    }
    get rides() {
        return this.#rides;
    }
    set rides(newRides) {
        this.#rides = newRides;
    }
    static getInstance() {
        if (this.#instance === null) {
            this.#instance = new ParkRides();
        }
        return this.#instance;
    }
}
export const vflRides = ParkRides.getInstance();
//# sourceMappingURL=ParkRides.js.map