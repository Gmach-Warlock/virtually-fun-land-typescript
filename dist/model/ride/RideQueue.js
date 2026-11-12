export class RideQueue {
    #ride;
    #head;
    #tail;
    constructor(ride) {
        this.#ride = ride;
        this.#head = null;
        this.#tail = null;
    }
    get ride() {
        return this.#ride;
    }
    set ride(newRide) {
        this.#ride = newRide;
    }
    get head() {
        return this.#head;
    }
    set head(newHead) {
        this.#head = newHead;
    }
    get tail() {
        return this.#tail;
    }
    set tail(newTail) {
        this.#tail = newTail;
    }
    log() {
        let current = this.#head;
        while (current) {
            console.log(`Guest: ${current.guest.name}`);
            current = current.next;
        }
    }
}
//# sourceMappingURL=RideQueue.js.map