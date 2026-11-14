import type { Guest } from "../guest/Guest.js";
export declare class Contestant {
    #private;
    constructor(guest: Guest);
    get id(): string;
    get guest(): Guest;
    get next(): Contestant | null;
    set next(newNext: Contestant | null);
}
//# sourceMappingURL=Contestant.d.ts.map