import { Game } from "./Game.js";
export class GameCounter {
    #game;
    #count;
    #max;
    constructor(game, max) {
        this.#game = game;
        this.#max = max;
    }
    get game() {
        return this.#game;
    }
    get count() {
        return this.#count;
    }
    set count(newCount) {
        this.#count = newCount;
    }
    get max() {
        return this.#max;
    }
    set max(newMax) {
        this.#max = newMax;
    }
}
//# sourceMappingURL=GameCounter.js.map