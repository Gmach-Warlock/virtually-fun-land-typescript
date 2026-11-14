export class ListOfSubscribers {
    #type;
    #subscribers;
    constructor(type, subs) {
        this.#type = type;
        this.#subscribers = subs;
    }
    get type() {
        return this.#type;
    }
    set type(newType) {
        this.#type = newType;
    }
    get subscribers() {
        return this.#subscribers;
    }
    set subscribers(newSubs) {
        this.#subscribers = newSubs;
    }
}
//# sourceMappingURL=ListOfSubscribers.js.map