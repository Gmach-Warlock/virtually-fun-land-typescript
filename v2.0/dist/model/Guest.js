export class Guest {
    general;
    track;
    constructor(name, pType, vip) {
        this.general = {
            id: crypto.randomUUID(),
            name,
            pType,
            vip,
        };
        this.track = {
            pCurrently: "entering",
            pLocation: "Entrance",
        };
    }
    log() {
        console.log(`Currently ${this.general.name} is currently at ${this.track.pLocation}`);
    }
}
//# sourceMappingURL=Guest.js.map