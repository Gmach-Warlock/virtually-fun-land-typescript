import type { IGuest } from "../types/IGuest.js";
export interface IRider {
    guest: IGuest;
    next: IRider | null;
}
export declare class Rider implements IRider {
    guest: IGuest;
    next: IRider | null;
    constructor(guest: IGuest);
}
//# sourceMappingURL=Rider.d.ts.map