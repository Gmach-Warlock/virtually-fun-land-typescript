export class GuestStatus {
    #guest;
    #status;
    constructor(guest, status) {
        this.#guest = guest;
        this.#status = status;
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
}
//# sourceMappingURL=GuestStatus.js.map