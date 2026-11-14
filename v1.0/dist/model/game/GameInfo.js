export class GameInfo {
    #game;
    #name;
    #description;
    #duration;
    constructor(game, name, description, duration) {
        this.#game = game;
        this.#name = name;
        this.#description = description;
        this.#duration = duration;
    }
    get game() {
        return this.#game;
    }
    get name() {
        return this.#name;
    }
    get description() {
        return this.#description;
    }
    get duration() {
        return this.#duration;
    }
}
//# sourceMappingURL=GameInfo.js.map