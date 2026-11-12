export class GuestStatus {
    #guest;
    #status;
    #location;
    #isVip;
    constructor(guest, isVip) {
        this.#guest = guest;
        this.#location = "Entrance";
        this.#status = "entering";
        this.#isVip = isVip;
    }
    get guest() {
        return this.#guest;
    }
    set guest(newGuest) {
        this.#guest = newGuest;
    }
    get status() {
        return this.#status;
    }
    set status(newStatus) {
        this.#status = newStatus;
    }
    get location() {
        return this.#location;
    }
    set location(newLocation) {
        this.#location = newLocation;
    }
    get isVip() {
        return this.#isVip;
    }
    set isVip(newIsVip) {
        this.#isVip = newIsVip;
    }
    log() {
        console.log(`${this.#guest.name}${this.#isVip ? "(VIP)" : ""} is currently ${this.#status} at the ${this.#location}. `);
    }
}
//# sourceMappingURL=GuestStatus.js.map