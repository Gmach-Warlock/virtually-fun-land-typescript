import { logLine } from "../view/prompts/attractions/logLines.js";
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
        guest.guest.track.pCurrently = "waiting";
        guest.guest.track.pLocation = this.attraction.general.name;
        this.map.set(guest.guest.general.id, guest);
        if (guest.guest.general.vip) {
            this.jump(guest);
            return;
        }
        if (this.head === null || this.tail === null) {
            this.head = guest;
            this.tail = guest;
            guest.next = null;
            return;
        }
        if (this.head !== null || this.tail !== null) {
            this.tail.next = guest;
            this.tail = guest;
            guest.next = null;
        }
        this.arr.push(guest);
    }
    dequeue() {
        if (this.head === null) {
            console.log(`Nobody left in line for ${this.attraction.general.name}`);
            return null;
        }
        const dequeud = this.head;
        this.head = dequeud.next;
        if (this.head === null) {
            this.tail === null;
        }
        if (dequeud?.guest?.general?.id) {
            this.map.delete(dequeud.guest.general.id);
        }
        const indexToSplice = this.arr.findIndex((guest) => guest.guest.general.id === dequeud?.guest.general.id);
        if (indexToSplice !== -1) {
            this.arr.splice(indexToSplice, 1);
        }
        dequeud.next = null;
        return dequeud;
    }
    jump(guest) {
        console.log(`${guest.guest.general.name} is a VIP and has entered the Fast Pass Zone for ${this.attraction.general.name}!`);
        guest.guest.track.pCurrently = "waiting";
        guest.guest.track.pLocation = this.attraction.general.name;
        if (this.head === null && this.tail === null) {
            this.head = guest;
            this.tail = guest;
            guest.next = null;
            this.arr.push(guest);
            return;
        }
        const fastPassSize = 3;
        let current = this.head;
        let index = 0;
        while (current !== null &&
            current.next !== null &&
            index < fastPassSize - 1) {
            current = current?.next;
            index++;
        }
        if (current === null) {
            return;
        }
        const nextNode = current.next;
        current.next = guest;
        guest.next = nextNode;
        if (nextNode === null) {
            this.tail = guest;
        }
        const targetIndex = Math.min(index + 1, this.arr.length);
        this.arr.splice(targetIndex, 0, guest);
    }
    log() {
        logLine(this);
    }
}
//# sourceMappingURL=Queue.js.map