export class Guest {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
  set name(newName: string) {
    this.#name = newName;
  }
}
