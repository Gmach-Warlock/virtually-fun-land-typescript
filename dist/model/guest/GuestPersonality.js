import { Guest } from "./Guest.js";
export class GuestPersonality {
    #guest;
    #type;
    constructor(guest, type) {
        this.#guest = guest;
        this.#type = type;
    }
    get guest() {
        return this.#guest;
    }
    set guest(newGuest) {
        this.#guest = newGuest;
    }
    get type() {
        return this.#type;
    }
    set type(newtype) {
        this.#type = newtype;
    }
    log() {
        console.log(`${this.#guest.name} is a ${this.#type}`);
    }
}
//# sourceMappingURL=GuestPersonality.js.map