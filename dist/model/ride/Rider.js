export class Rider {
    #ride;
    #guest;
    #next;
    constructor(ride, guest) {
        this.#ride = ride;
        this.#guest = guest;
        this.#next = null;
    }
    get ride() {
        return this.#ride;
    }
    set ride(newRide) {
        this.#ride = newRide;
    }
    get guest() {
        return this.#guest;
    }
    set guest(newGuest) {
        this.#guest = newGuest;
    }
    get next() {
        return this.#next;
    }
    set next(newNext) {
        this.#next = newNext;
    }
}
//# sourceMappingURL=Rider.js.map