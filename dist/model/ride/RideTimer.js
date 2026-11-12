export class RideTimer {
    #ride;
    #duration;
    constructor(ride, duration) {
        this.#ride = ride;
        this.#duration = duration;
    }
    get ride() {
        return this.#ride;
    }
    set ride(newRide) {
        this.#ride = newRide;
    }
    get duration() {
        return this.#duration;
    }
    set duration(newDuration) {
        this.#duration = newDuration;
    }
}
//# sourceMappingURL=RideTimer.js.map