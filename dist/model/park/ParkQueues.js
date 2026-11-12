export class ParkQueues {
    #park;
    #queues;
    static #instance = null;
    constructor() {
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
}
export const vflQueues = ParkQueues.getInstance();
//# sourceMappingURL=ParkQueues.js.map