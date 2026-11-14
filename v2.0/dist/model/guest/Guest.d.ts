import type { TPersonality, TCurrently, IGuest } from "../../types/guests/IGuest.js";
export declare class Guest implements IGuest {
    id: string;
    name: string;
    pType: TPersonality;
    isVip: boolean;
    pCurrently: TCurrently;
    constructor(name: string, pType: TPersonality, isViP?: boolean);
}
//# sourceMappingURL=Guest.d.ts.map