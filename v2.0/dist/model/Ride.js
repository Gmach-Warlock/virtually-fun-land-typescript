import { attractionLog } from "../controller/prompts/attractionPrompts.js";
export class Ride {
    general;
    metrics;
    queue;
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
    }
    log() {
        attractionLog(this);
    }
}
//# sourceMappingURL=Ride.js.map