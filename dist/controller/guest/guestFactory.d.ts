import { Guest } from "../../model/guest/Guest.js";
import { GuestStatus } from "../../model/guest/GuestStatus.js";
import { GuestPersonality } from "../../model/guest/GuestPersonality.js";
export declare function createOpeningCrowdNames(): {
    regulars: string[];
    randoms: string[];
};
export declare function createGuest(name: string): {
    guest: Guest;
    status: GuestStatus;
    personality: GuestPersonality;
};
//# sourceMappingURL=guestFactory.d.ts.map