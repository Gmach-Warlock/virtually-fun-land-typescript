import { Park, vfl } from "./Park.js";
import { vflCounters } from "./ParkCounters.js";
import { vflQueues } from "./ParkQueues.js";
import { vflTimers } from "./ParkTimers.js";
export class ParkManager {
    #park;
    #counters;
    #timers;
    #queues;
    static #instance = null;
    constructor() {
        this.#park = vfl;
        this.#counters = vflCounters;
        this.#timers = vflTimers;
        this.#queues = vflQueues;
    }
    get park() {
        return this.#park;
    }
    get counters() {
        return this.#counters;
    }
    get timers() {
        return this.#timers;
    }
    get queues() {
        return this.#queues;
    }
    static getInstance() {
        if (this.#instance === null) {
            this.#instance = new ParkManager();
        }
        return this.#instance;
    }
}
export const vflManager = ParkManager.getInstance();
//# sourceMappingURL=ParkManager.js.map