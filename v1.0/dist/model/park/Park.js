export class Park {
    name;
    counters;
    queues;
    timers;
    static #instance = null;
    constructor() {
        this.name = "Virtually Fun Land";
    }
    static getInstance() {
        if (this.#instance === null) {
            this.#instance = new Park();
        }
        return this.#instance;
    }
    build(buildObj) {
        this.counters = buildObj.counters;
        this.timers = buildObj.timers;
        this.queues = buildObj.queues;
    }
    log() {
        console.log(`The park is open from 8am to 9pm Monday through Friday and 8am to 10pm on the weekend.`);
    }
}
export const vfl = Park.getInstance();
//# sourceMappingURL=Park.js.map