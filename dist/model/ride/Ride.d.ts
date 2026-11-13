import type { RideInfo } from "./RideInfo.js";
import type { RideCounter } from "./RideCounter.js";
import type { RideQueue } from "./RideQueue.js";
import type { RideTimer } from "./RideTimer.js";
export declare class Ride {
    #private;
    constructor(id: string);
    get id(): string;
    get info(): RideInfo;
    set info(newInfo: RideInfo);
    get counter(): RideCounter | undefined;
    set counter(newCounter: RideCounter | undefined);
    get timer(): RideTimer | undefined;
    set timer(newTimer: RideTimer | undefined);
    get queue(): RideQueue | undefined;
    set queue(newQueue: RideQueue | undefined);
    log(): void;
}
//# sourceMappingURL=Ride.d.ts.map