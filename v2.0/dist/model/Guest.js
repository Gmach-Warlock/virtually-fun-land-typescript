import { logGuestCurrently } from "../view/prompts/guests/logGuestActivitiis.js";
export class Guest {
    general;
    track;
    constructor(name, pType, vip) {
        this.general = {
            id: crypto.randomUUID(),
            name,
            pType,
            vip,
        };
        this.track = {
            pCurrently: "entering",
            pLocation: "Entrance",
        };
    }
    log() {
        logGuestCurrently(this);
    }
}
//# sourceMappingURL=Guest.js.map