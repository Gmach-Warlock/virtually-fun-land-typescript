import type { Personality, GuestInfo, GuestInstance, GuestTracker } from "../types/guestTypeDefs.js";
export declare class Guest implements GuestInstance {
    general: GuestInfo;
    track: GuestTracker;
    constructor(name: string, pType: Personality, vip: boolean);
    log(): void;
}
//# sourceMappingURL=Guest.d.ts.map