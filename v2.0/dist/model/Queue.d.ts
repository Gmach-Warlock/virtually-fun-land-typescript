import type { IAttraction } from "../types/IAttractions.js";
import type { IGuest } from "../types/IGuest.js";
import type { ILinkedChild, IQueue, IQueueObj } from "../types/IQueue.js";
export declare class Queue implements IQueue<IGuest | null> {
    attraction: IAttraction;
    arr: IQueueObj[];
    map: Map<string, IQueueObj>;
    head: IQueueObj | null;
    tail: IQueueObj | null;
    vipMark: IQueueObj | null;
    constructor(attraction: IAttraction);
    enqueue(guest: IQueueObj): void;
    dequeue(): ILinkedChild<IGuest | null>;
    jump(item: IGuest | null): void;
}
//# sourceMappingURL=Queue.d.ts.map