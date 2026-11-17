import { attractionLog } from "../view/prompts/attractions/attractionPrompts.js";
export class Show {
    general;
    metrics;
    queue;
    interval;
    constructor(id, name, description, category, duration, type, perTurn, max) {
        this.general = {
            id,
            name,
            description,
            category,
            type,
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
//# sourceMappingURL=Show.js.map