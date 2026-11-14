export class Guest {
    id;
    name;
    #personality;
    #status;
    constructor(name) {
        this.id = crypto.randomUUID();
        this.name = name;
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