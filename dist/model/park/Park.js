export class Park {
    #name;
    #counters;
    #queues;
    #timers;
    static #instance = null;
    constructor() {
        this.#name = "Virtually Fun Land";
    }
    get name() {
        return this.#name;
    }
    get counters() {
        return this.#counters;
    }
    set counters(newCounters) {
        this.#counters = newCounters;
    }
    get queues() {
        return this.#queues;
    }
    set queues(newQueues) {
        this.#queues = newQueues;
    }
    get timers() {
        return this.#timers;
    }
    set timers(newTimers) {
        this.#timers = newTimers;
    }
    static getInstance() {
        if (this.#instance === null) {
            this.#instance = new Park();
        }
        return this.#instance;
    }
    build(buildObj) {
        this.#counters = buildObj.counters;
        this.#timers = buildObj.timers;
        this.#queues = buildObj.queues;
    }
}
export const vfl = Park.getInstance();
//# sourceMappingURL=Park.js.map