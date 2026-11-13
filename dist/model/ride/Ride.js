export class Ride {
    #id;
    #info;
    #counter;
    #timer;
    #queue;
    constructor(id) {
        this.#id = id;
    }
    get id() {
        return this.#id;
    }
    get info() {
        if (!this.#info) {
            throw new Error("Ride info has not been set.");
        }
        return this.#info;
    }
    set info(newInfo) {
        this.#info = newInfo;
    }
    get counter() {
        return this.#counter;
    }
    set counter(newCounter) {
        this.#counter = newCounter;
    }
    get timer() {
        return this.#timer;
    }
    set timer(newTimer) {
        this.#timer = newTimer;
    }
    get queue() {
        return this.#queue;
    }
    set queue(newQueue) {
        this.#queue = newQueue;
    }
    log() {
        console.log(`The ${this.#info?.name ?? ""} is a ${this.#info?.type}. 
It is has a runtime of ${this.#timer?.duration} minutes 
and ${this.#info?.occupancy} people ride each time.
      `);
    }
}
//# sourceMappingURL=Ride.js.map