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
        // need our function in typescript
    }
}
//# sourceMappingURL=GuestList.js.map