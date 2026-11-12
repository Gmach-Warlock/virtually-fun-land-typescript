export class RideCabin {
    #ride;
    #occupancy;
    constructor(ride, occupancy) {
        this.#ride = ride;
        this.#occupancy = occupancy;
    }
    get ride() {
        return this.#ride;
    }
    set ride(newRide) {
        this.#ride = newRide;
    }
    get occupancy() {
        return this.#occupancy;
    }
    set occupancy(newOccupancy) {
        this.#occupancy = newOccupancy;
    }
}
//# sourceMappingURL=RideCabin.js.map