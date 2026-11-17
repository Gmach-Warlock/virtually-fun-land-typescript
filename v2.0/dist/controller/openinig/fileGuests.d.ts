import type { GuestCurrently, GuestInstance, ParkLocation } from "../../types/guestTypeDefs.js";
import type { ParkInstance } from "../../types/gameTypeDefs.js";
export declare function getInLine(guest: GuestInstance, park: ParkInstance, initial?: boolean): void;
export declare function updateGuestTracker(guest: GuestInstance, currently: GuestCurrently, location: ParkLocation): void;
export declare function fileGuests(): void;
//# sourceMappingURL=fileGuests.d.ts.map