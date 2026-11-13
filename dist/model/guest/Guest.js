export class Guest {
    #name;
    #personality;
    #status;
    constructor(name) {
        this.#name = name;
    }
    get name() {
        return this.#name;
    }
    set name(newName) {
        this.#name = newName;
    }
    get personality() {
        return this.#personality;
    }
    set personality(newPersonality) {
        this.#personality = newPersonality;
    }
    get status() {
        return this.#status;
    }
    set status(newStatus) {
        this.#status = newStatus;
    }
    log() {
        console.log("Finish buddy");
    }
}
//# sourceMappingURL=Guest.js.map