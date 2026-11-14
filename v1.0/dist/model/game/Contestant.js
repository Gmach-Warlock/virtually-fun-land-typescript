export class Contestant {
    #id;
    #guest;
    #next = null;
    constructor(guest) {
        this.#id = crypto.randomUUID();
        this.#guest = guest;
    }
    get id() {
        return this.#id;
    }
    get guest() {
        return this.#guest;
    }
    get next() {
        return this.#next;
    }
    set next(newNext) {
        this.#next = newNext;
    }
}
//# sourceMappingURL=Contestant.js.map