import type { GuestStatus } from "./GuestStatus.js";
import type { GuestPersonality } from "./GuestPersonality.js";
export declare class Guest {
    #private;
    constructor(name: string);
    get name(): string;
    set name(newName: string);
    get personality(): GuestPersonality | undefined;
    set personality(newPersonality: GuestPersonality | undefined);
    get status(): GuestStatus | undefined;
    set status(newStatus: GuestStatus | undefined);
    log(): void;
}
//# sourceMappingURL=Guest.d.ts.map