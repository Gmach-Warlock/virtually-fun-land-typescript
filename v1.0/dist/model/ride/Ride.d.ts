import type { RideInfo } from "./RideInfo.js";
import type { RideCounter } from "./RideCounter.js";
import type { RideQueue } from "./RideQueue.js";
import type { RideTimer } from "./RideTimer.js";
export declare class Ride {
    id: string;
    info: RideInfo | undefined;
    counter: RideCounter | undefined;
    timer: RideTimer | undefined;
    queue: RideQueue | undefined;
    constructor(id: string);
    log(): void;
}
//# sourceMappingURL=Ride.d.ts.map