import { attractionLog } from "../controller/prompts/attractionPrompts.js";
export class Game {
    general;
    metrics;
    queue = null;
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
    }
    log() {
        attractionLog(this);
    }
}
//# sourceMappingURL=Game.js.map