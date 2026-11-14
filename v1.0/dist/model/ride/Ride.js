export class Ride {
    id;
    info;
    counter;
    timer;
    queue;
    constructor(id) {
        this.id = id;
    }
    log() {
        if (!this.info) {
            return;
        }
        console.log(`The ${this.info.name} is a ${this.info.type}. 
It is has a runtime of ${this.timer?.duration} minutes 
and ${this.info.occupancy} people ride each time.
      `);
    }
}
//# sourceMappingURL=Ride.js.map