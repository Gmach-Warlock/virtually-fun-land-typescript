import { Guest } from "../../model/guest/Guest.js";
import { GuestStatus } from "../../model/guest/GuestStatus.js";
import { GuestPersonality } from "../../model/guest/GuestPersonality.js";
import type { GuestObj } from "../../types/guestInterface.js";
export declare function createOpeningCrowdNames(): {
    regulars: string[];
    randoms: string[];
};
export declare function createGuest(name: string): {
    guest: Guest;
    status: GuestStatus;
    personality: GuestPersonality;
};
export declare function createOpeningGuests(): {
    regulars: {
        guest: Guest;
        status: GuestStatus;
        personality: GuestPersonality;
    }[];
    randoms: {
        guest: Guest;
        status: GuestStatus;
        personality: GuestPersonality;
    }[];
};
export declare function hydrateGuest(guestObj: GuestObj): void;
//# sourceMappingURL=guestFactory.d.ts.map