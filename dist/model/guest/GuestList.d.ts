import type { Guest } from "./Guest.js";
export declare class GuestList {
    #private;
    constructor();
    get guests(): Guest[];
    set guests(newGuests: Guest[]);
    add(guest: Guest): void;
    remove(guest: Guest): void;
    log(): void;
}
//# sourceMappingURL=GuestList.d.ts.map