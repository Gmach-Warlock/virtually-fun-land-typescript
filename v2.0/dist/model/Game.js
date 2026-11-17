import { attractionLog } from "../view/prompts/attractions/attractionPrompts.js";
export class Game {
    general;
    metrics;
    queue = null;
    interval;
    constructor(id, name, description, category, duration, type, perTurn, max) {
        ((this.general = {
            id,
            name,
            description,
            category,
            type,
        }),
            (this.metrics = {
                duration,
                perTurn,
                max,
            }));
        this.queue = null;
        this.interval = null;
    }
    log() {
        attractionLog(this);
    }
}
//# sourceMappingURL=Game.js.map