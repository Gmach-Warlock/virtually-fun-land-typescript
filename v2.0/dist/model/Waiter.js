export class Waiter {
    parent;
    guest;
    next = null;
    isLineMarker;
    constructor(parent, guest) {
        this.parent = parent;
        this.guest = guest;
        this.isLineMarker = false;
    }
    log() {
        console.log(`${this.guest.general.name} is in currently in line for ${this.parent.attraction.general.name}`);
    }
}
//# sourceMappingURL=Waiter.js.map