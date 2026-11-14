export class Rider {
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
        console.log(`${this.guest.general.name} is in currently in line for`);
    }
}
//# sourceMappingURL=Waiter.js.map