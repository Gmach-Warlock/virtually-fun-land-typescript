import type { Guest } from "../guest/Guest.js";
import type { Ride } from "./Ride.js";
import { Rider } from "./Rider.js";
export declare class RideQueue {
    #private;
    constructor(ride: Ride);
    get ride(): Ride;
    set ride(newRide: Ride);
    get head(): Rider | null;
    set head(newHead: Rider | null);
    get tail(): Rider | null;
    set tail(newTail: Rider | null);
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