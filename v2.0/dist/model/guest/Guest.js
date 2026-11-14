export class Guest {
    id = "";
    name = "";
    pType;
    isVip;
    pCurrently;
    constructor(name, pType, isViP = false) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.pType = pType;
        this.isVip = isViP;
        this.pCurrently = "entering";
    }
}
//# sourceMappingURL=Guest.js.map