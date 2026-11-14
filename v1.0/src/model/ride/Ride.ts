import type { RideInfo } from "./RideInfo.js";
import type { RideCounter } from "./RideCounter.js";
import type { RideQueue } from "./RideQueue.js";
import type { RideTimer } from "./RideTimer.js";

export class Ride {
  id: string;
  info: RideInfo | undefined;
  counter: RideCounter | undefined;
  timer: RideTimer | undefined;
  queue: RideQueue | undefined;

  constructor(id: string) {
    this.id = id;
  }

  log() {
    if (!this.info) {
      return;
    }

    console.log(
      `The ${this.info.name} is a ${this.info.type}. 
It is has a runtime of ${this.timer?.duration} minutes 
and ${this.info.occupancy} people ride each time.
      `,
    );
  }
}
