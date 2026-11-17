import { DEBUG } from "../../controller/CRUD/DEBUG.js";
import { denyAndReturn } from "../../view/getInput.js";
export function findDequeueGuest(attraction) {
    const guestToRemove = attraction.queue?.head;
    if (!guestToRemove) {
        denyAndReturn(`something wrong in findDequeuGuest`);
        return;
    }
    return guestToRemove;
}
export function handleAttractionTurnover(attraction, debug = "none") {
    const queue = attraction.queue;
    const perTurn = attraction.queue?.attraction.metrics.perTurn ?? 1;
    for (let i = 0; i < perTurn; i++) {
        if (debug === "full")
            DEBUG("CHECK DEQUE FULL", [queue, perTurn]);
        const guest = queue?.dequeue();
    }
}
//# sourceMappingURL=dequeueGuest.js.map