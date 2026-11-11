export class RideCounter {
    #ride;
    #count;
    #max;
    constructor(ride, max) {
        this.#ride = ride;
        this.#count = 0;
        this.#max = max;
    }
    get ride() {
        return this.#ride;
    }
    set ride(newRide) {
        this.#ride = newRide;
    }
    get count() {
        return this.#count;
    }
    set count(newCount) {
        this.#count = newCount;
    }
    get max() {
        return this.#max;
    }
    set max(newMax) {
        this.#max = newMax;
    }
}
//# sourceMappingURL=RideCounter.js.map