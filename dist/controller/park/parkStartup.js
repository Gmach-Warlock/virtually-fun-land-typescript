import { vfl } from "../../model/park/Park.js";
import { vflCounters } from "../../model/park/ParkCounters.js";
import { vflQueues } from "../../model/park/ParkQueues.js";
import { vflTimers } from "../../model/park/ParkTimers.js";
import { openingGates, openParkBanner, } from "../prompts/opening/openPrompts.js";
export function buildPark() {
    const buildObj = {
        park: vfl,
        counters: vflCounters,
        timers: vflTimers,
        queues: vflQueues,
    };
    vfl.build(buildObj);
}
export function buildPrompts() {
    openParkBanner();
    openingGates();
}
export function buildStartup() {
    buildPark();
    buildPrompts();
}
export function initializePark() {
    buildPark();
    buildPrompts();
}
//# sourceMappingURL=parkStartup.js.map