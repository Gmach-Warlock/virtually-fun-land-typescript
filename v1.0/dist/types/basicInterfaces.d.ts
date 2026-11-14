import { Park } from "../model/park/Park.js";
import { ParkCounters } from "../model/park/ParkCounters.js";
import { ParkQueues } from "../model/park/ParkQueues.js";
import { ParkTimers } from "../model/park/ParkTimers.js";
export interface CRUDableInstance<T> {
    add(value: T): void;
    remove?(value: T): void;
    update?(value: T): void;
    delete?(value: T): void;
    log?(): void;
}
export interface LoggableInstane<T> {
    log(value: T): void;
}
export interface ParkBuilder {
    park: Park;
    counters: ParkCounters;
    timers: ParkTimers;
    queues: ParkQueues;
}
//# sourceMappingURL=basicInterfaces.d.ts.map