export class RideInfo {
    #ride;
    #name;
    #description;
    #type;
    #occupancy;
    #duration;
    constructor(ride, name, description, type, duration, occupancy) {
        this.#ride = ride;
        this.#name = name;
        this.#description = description;
        this.#occupancy = occupancy;
        this.#type = type;
        this.#duration = duration;
    }
    get ride() {
        return this.#ride;
    }
    set ride(newRide) {
        this.#ride = newRide;
    }
    get name() {
        return this.#name;
    }
    set name(newName) {
        this.#name = newName;
    }
    get description() {
        return this.#description;
    }
    set description(newDesc) {
        this.#description = newDesc;
    }
    get type() {
        return this.#type;
    }
    set type(newType) {
        this.#type = newType;
    }
    get occupancy() {
        return this.#occupancy;
    }
    set occupancy(newOccupancy) {
        this.#occupancy = newOccupancy;
    }
}
//# sourceMappingURL=RideInfo.js.map