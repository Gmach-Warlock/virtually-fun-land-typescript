import { updateGuestTracker } from "../controller/openinig/fileGuests.js";
import { denyAndReturn } from "../view/getInput.js";
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
        if (guest.guest.general.vip) {
            console.log(`${guest.guest.general.name} is a VIP so they enter the fast Pass Zone! `);
        }
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
        guest.guest.track.pCurrently = "waiting";
        guest.guest.track.pLocation = this.attraction.general.name;
    }
    dequeue() {
        if (this.head === null && this.tail === null) {
            console.log(`Nobody left in line for ${this.attraction.general.name}`);
            return null;
        }
        const dequeud = this.head;
        if (dequeud !== null) {
            this.head = dequeud.next;
        }
        const indexToSplice = this.arr.findIndex((guest) => guest.guest.general.id === dequeud?.guest.general.id);
        if (!indexToSplice) {
            denyAndReturn(`Couldn't get index`);
            return null;
        }
        this.arr = this.arr.splice(indexToSplice, 1);
        // DEBUG("CHECK INDEX DEQUEUE", [dequeud]);
        return dequeud;
    }
    jump(item) { }
    log() {
        logLine(this);
    }
}
//# sourceMappingURL=Queue.js.map