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
    log() {
        console.log(`The ${this.#ride.info?.name} has a runtime of ${this.duration}`);
    }
}
//# sourceMappingURL=RideTimer.js.map