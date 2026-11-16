import { dequeueHelper } from "../controller/queue/queueHelpers.js";
import { logLine } from "../view/prompts/logLines.js";
export class Queue {
    attraction;
    arr;
    map;
    head;
    tail;
    vipMark;
    constructor(attraction) {
        this.attraction = attraction;
        this.arr = [];
        this.map = new Map();
        this.head = null;
        this.tail = null;
        this.vipMark = null;
    }
    enqueue(guest) {
        if (this.head === null || this.tail === null) {
            this.head = guest;
            this.tail = guest;
            return;
        }
        if (this.head !== null && this.tail !== null) {
            const temp = this.tail;
            this.tail = guest;
            if (temp)
                temp.next = guest;
        }
        this.arr.push(guest);
    }
    dequeue() {
        if (this.head === null && this.tail === null) {
            console.log(`Nobody left in line for ${this.attraction.general.name}`);
            return null;
        }
        const dequeud = dequeueHelper(this.head, this.tail);
        return dequeud;
    }
    jump(item) { }
    log() {
        logLine(this);
    }
}
//# sourceMappingURL=Queue.js.map