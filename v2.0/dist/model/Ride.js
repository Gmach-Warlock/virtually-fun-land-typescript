import { attractionLog } from "../view/prompts/attractions/attractionPrompts.js";
export class Ride {
    general;
    metrics;
    queue;
    interval;
    constructor(id, name, description, category, duration, type, perTurn, max) {
        this.general = {
            id,
            name,
            description,
            type,
            category,
        };
        this.metrics = {
            duration,
            perTurn,
            max,
        };
        this.queue = null;
        this.interval = null;
    }
    log() {
        attractionLog(this);
    }
}
//# sourceMappingURL=Ride.js.map