import type { TPersonality, IGuestInfo, IGuest, IGuestTracker } from "../types/IGuest.js";
export declare class Guest implements IGuest {
    general: IGuestInfo;
    track: IGuestTracker;
    constructor(name: string, pType: TPersonality, vip: boolean);
    log(): void;
}
//# sourceMappingURL=Guest.d.ts.map