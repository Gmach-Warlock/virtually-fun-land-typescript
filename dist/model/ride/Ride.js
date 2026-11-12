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
}
//# sourceMappingURL=Ride.js.map