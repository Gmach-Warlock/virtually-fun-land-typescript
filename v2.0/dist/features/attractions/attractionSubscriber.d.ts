import type { GuestInstance } from "../../types/guestTypeDefs.js";
import type { ListenerNotify } from "../../types/notifyTypeDefs.js";
export declare function attractionsLogSubscriber(type: ListenerNotify, guest: GuestInstance, debug?: boolean): void;
export declare function guestListLogSubscriber(type: ListenerNotify): void;
export declare const logListeners: (typeof attractionsLogSubscriber)[];
//# sourceMappingURL=attractionSubscriber.d.ts.map