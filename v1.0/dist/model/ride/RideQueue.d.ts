import type { Guest } from "../guest/Guest.js";
import type { Ride } from "./Ride.js";
import { Rider } from "./Rider.js";
import type { IQueue } from "../../types/queue/iqueue.js";
export declare class RideQueue implements IQueue<Guest | Rider> {
    #private;
    head: Rider | null;
    tail: Rider | null;
    constructor(ride: Ride);
    get ride(): Ride;
    set ride(newRide: Ride);
    get map(): object | undefined;
    set map(newMap: object | undefined);
    get arr(): Rider[] | undefined;
    set arr(newArr: Rider[] | undefined);
    dequeue(): void;
    enqueue(guest: Guest): void;
    jump(guest: Guest): void;
    log(): void;
}
//# sourceMappingURL=RideQueue.d.ts.map