import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
import type { Guest } from "../guest/Guest.js";
import { Contestant } from "./Contestant.js";
import type { Game } from "./Game.js";

export class GameContestants {
  #game: Game;
  #head: Contestant | null = null;
  #tail: Contestant | null = null;

  constructor(game: Game) {
    this.#game = game;
  }

  get game() {
    return this.#game;
  }
  get head(): Contestant | null {
    return this.#head;
  }
  set head(newHead: Contestant | null) {
    this.#head = newHead;
  }
  get tail(): Contestant | null {
    return this.#tail;
  }
  set tail(newTail: Contestant | null) {
    this.#tail = newTail;
  }

  dequeue() {
    if (this.#head === null) {
      console.log(`There are no more players here right now.`);
      return;
    }
    this.#head = this.#head.next;
  }

  enqueue(guest: Guest) {
    const newContestant = new Contestant(guest);
    if (this.#head === null && this.#tail === null) {
      this.#head = newContestant;
      this.#tail = newContestant;
    }
    if (this.#head !== null && this.#tail !== null) {
      const temp = this.#tail;
      this.#tail = newContestant;
      if (temp) temp.next = newContestant;
    }
    console.log(
      `${guest.name} has just gotten in line to play ${this.#game.info?.name}`,
    );
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
