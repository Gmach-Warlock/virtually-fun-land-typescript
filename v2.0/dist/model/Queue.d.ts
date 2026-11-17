import type { Attraction } from "../types/attractionsTypeDefs.js";
import type { QueueInstance, WaitingGuest } from "../types/queuTypeDefs.ts.js";
export declare class Queue implements QueueInstance<WaitingGuest> {
    attraction: Attraction;
    arr: WaitingGuest[];
    map: Map<string, WaitingGuest>;
    head: WaitingGuest | null;
    tail: WaitingGuest | null;
    vipMark: WaitingGuest | null;
    constructor(attraction: Attraction);
    enqueue(guest: WaitingGuest): void;
    dequeue(): WaitingGuest;
    jump(item: WaitingGuest): void;
    log(): void;
}
//# sourceMappingURL=Queue.d.ts.map