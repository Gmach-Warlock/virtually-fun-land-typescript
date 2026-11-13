import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
import { vfl } from "./Park.js";
export class ParkQueues {
    #park;
    #queues;
    static #instance = null;
    constructor() {
        this.#park = vfl;
        this.#queues = [];
    }
    get park() {
        return this.#park;
    }
    set park(newPark) {
        this.#park = newPark;
    }
    get queues() {
        return this.#queues;
    }
    set queues(newQueues) {
        this.#queues = newQueues;
    }
    static getInstance() {
        if (this.#instance === null) {
            this.#instance = new ParkQueues();
        }
        return this.#instance;
    }
    add(queue) {
        this.#queues = addItemToArray(this.#queues ?? [], queue);
    }
    log() {
        console.log(`Here is a list of the rides and their lines`);
        this.#queues?.forEach((queue) => {
            console.log(`${queue.ride.info.name}`);
        });
    }
}
export const vflQueues = ParkQueues.getInstance();
//# sourceMappingURL=ParkQueues.js.map