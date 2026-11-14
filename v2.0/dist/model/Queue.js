import { dequeueHelper, enqueueHelper, } from "../controller/queue/queueHelpers.js";
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
        if (this.head === null || this.tail === null)
            return;
        enqueueHelper(guest, this.head, this.tail);
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
}
//# sourceMappingURL=Queue.js.map