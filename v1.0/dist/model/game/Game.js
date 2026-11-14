export class Game {
    #id;
    #info;
    #counter;
    #contestants;
    constructor(id) {
        this.#id = id;
    }
    get id() {
        return this.#id;
    }
    get info() {
        return this.#info;
    }
    set info(newInfo) {
        this.#info = newInfo;
    }
    get counter() {
        return this.#counter;
    }
    set counter(newCounter) {
        this.#counter = newCounter;
    }
    get contestants() {
        return this.#contestants;
    }
    set contestants(newContestants) {
        this.#contestants = newContestants;
    }
    log() {
        console.log(`Step right up and play ${this.#info?.name}!
${this.info?.description}. Anyone can win!! Try to become our leader of the day!!
`);
    }
}
//# sourceMappingURL=Game.js.map