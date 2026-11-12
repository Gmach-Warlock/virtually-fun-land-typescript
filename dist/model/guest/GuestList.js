import { addItemToArray, removeItemFromArray, } from "../../controller/crud/CRUDHelpers.js";
function logGuest(guest) {
    console.log(`Guest: ${guest.name}`);
}
export class GuestList {
    #guests;
    constructor() {
        this.#guests = [];
    }
    get guests() {
        return this.#guests;
    }
    set guests(newGuests) {
        this.#guests = newGuests;
    }
    add(guest) {
        this.#guests = addItemToArray(this.#guests, guest);
    }
    remove(guest) {
        this.#guests =
            removeItemFromArray(this.#guests, guest, "name", guest.name) ?? [];
    }
    log() {
        this.#guests.forEach((guest) => logGuest(guest));
    }
}
//# sourceMappingURL=GuestList.js.map