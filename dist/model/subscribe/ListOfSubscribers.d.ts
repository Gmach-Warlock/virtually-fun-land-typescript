import type { Subscription } from "../../types/basic/basicTypes.js";
import type { Subscriber } from "./Subscriber.js";
export declare class ListOfSubscribers {
    #private;
    constructor(type: Subscription, subs: Subscriber[]);
    get type(): Subscription;
    set type(newType: Subscription);
    get subscribers(): Subscriber[];
    set subscribers(newSubs: Subscriber[]);
}
//# sourceMappingURL=ListOfSubscribers.d.ts.map