import { vfl } from "../../model/park/Park.js";
import { vflCounters } from "../../model/park/ParkCounters.js";
import { vflQueues } from "../../model/park/ParkQueues.js";
import { vflTimers } from "../../model/park/ParkTimers.js";
import { openParkBanner } from "../prompts/opening/openBanner.js";
export function buildPark() {
    const buildObj = {
        park: vfl,
        counters: vflCounters,
        timers: vflTimers,
        queues: vflQueues,
    };
    vfl.build(buildObj);
}
export function openPark() {
    openParkBanner();
}
export function initializePark() {
    buildPark();
    openPark();
    console.log(vfl, vflCounters, vflQueues, vflTimers);
}
//# sourceMappingURL=parkStartup.js.map