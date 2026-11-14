import { Park } from "../park/Park.js";
import type { Guest } from "./Guest.js";
import type { BasicNotify } from "../../types/basic/basicTypes.js";
export declare class GuestList {
    #private;
    guests: Guest[];
    constructor();
    get park(): Park | undefined;
    static getInstance(): GuestList;
    add(guest: Guest): void;
    remove(guest: Guest): void;
    log(type: BasicNotify): void;
}
export declare const vflGuestList: GuestList;
//# sourceMappingURL=GuestList.d.ts.map