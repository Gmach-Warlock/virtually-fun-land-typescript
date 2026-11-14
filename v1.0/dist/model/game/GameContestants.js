import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
import { Contestant } from "./Contestant.js";
export class GameContestants {
    #game;
    #head = null;
    #tail = null;
    constructor(game) {
        this.#game = game;
    }
    get game() {
        return this.#game;
    }
    get head() {
        return this.#head;
    }
    set head(newHead) {
        this.#head = newHead;
    }
    get tail() {
        return this.#tail;
    }
    set tail(newTail) {
        this.#tail = newTail;
    }
    dequeue() {
        if (this.#head === null) {
            console.log(`There are no more players here right now.`);
            return;
        }
        this.#head = this.#head.next;
    }
    enqueue(guest) {
        const newContestant = new Contestant(guest);
        if (this.#head === null && this.#tail === null) {
            this.#head = newContestant;
            this.#tail = newContestant;
        }
        if (this.#head !== null && this.#tail !== null) {
            const temp = this.#tail;
            this.#tail = newContestant;
            if (temp)
                temp.next = newContestant;
        }
        console.log(`${guest.name} has just gotten in line to play ${this.#game.info?.name}`);
    }
    log() {
        console.log(`Here are the contestants for ${this.#game.info?.name}: 
        `);
        let current = this.#head;
        while (current) {
            console.log("checker", current.guest.name);
            current = current.next;
        }
    }
}
//# sourceMappingURL=GameContestants.js.map