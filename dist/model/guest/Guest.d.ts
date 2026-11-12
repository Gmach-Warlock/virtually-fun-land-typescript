import type { Personality } from "../../types/GuestTypes.js";
export declare class Guest {
    #private;
    constructor(name: string);
    get name(): string;
    set name(newName: string);
    get personality(): Personality | undefined;
    set personality(newPersonality: Personality);
}
//# sourceMappingURL=Guest.d.ts.map