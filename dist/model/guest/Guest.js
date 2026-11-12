export class Guest {
    #name;
    #personality;
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
        if (this.#personality)
            return this.#personality;
    }
    set personality(newPersonality) {
        this.#personality = newPersonality;
    }
}
//# sourceMappingURL=Guest.js.map