export class Ride {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
  set name(newName) {
    this.#name = newName;
  }
}
