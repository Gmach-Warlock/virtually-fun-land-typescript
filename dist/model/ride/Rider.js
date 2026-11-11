export class Rider {
    #ride;
    #guest;
    constructor(ride, guest) {
        this.#ride = ride;
        this.#guest = guest;
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
}
//# sourceMappingURL=Rider.js.map