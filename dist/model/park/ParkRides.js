import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
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
    add(ride) {
        this.#rides = addItemToArray(this.#rides, ride);
    }
    log() {
        console.log(`
Virtually Fun Land's rides are now up and running with expected wait times!
    `);
        this.#rides.forEach((ride) => ride.log());
    }
}
export const vflRides = ParkRides.getInstance();
//# sourceMappingURL=ParkRides.js.map