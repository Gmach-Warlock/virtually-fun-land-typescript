import { attractionLog } from "../controller/prompts/attractionPrompts.js";
export class Show {
    general;
    metrics;
    queue;
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
    }
    log() {
        attractionLog(this);
    }
}
//# sourceMappingURL=Show.js.map