export class Guest {
    #name;
    constructor(name) {
        this.#name = name;
    }
    get name() {
        return this.#name;
    }
    set name(newName) {
        this.#name = newName;
    }
}
//# sourceMappingURL=Guest.js.map