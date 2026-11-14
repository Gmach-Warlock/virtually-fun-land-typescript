import { Guest } from "./Guest.js";
export class GuestPersonality {
    #guest;
    type;
    constructor(guest, type) {
        this.#guest = guest;
        this.type = type;
    }
    get guest() {
        return this.#guest;
    }
    set guest(newGuest) {
        this.#guest = newGuest;
    }
    log() {
        console.log(`${this.#guest.name} is a ${this.type}`);
    }
}
//# sourceMappingURL=GuestPersonality.js.map