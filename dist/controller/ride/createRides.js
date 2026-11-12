import { commandLineCoasterInfo } from "../../assets/vflRides.js";
import { Ride } from "../../model/ride/Ride.js";
import { RideCounter } from "../../model/ride/RideCounter.js";
import { RideInfo } from "../../model/ride/RideInfo.js";
import { RideQueue } from "../../model/ride/RideQueue.js";
import { RideTimer } from "../../model/ride/RideTimer.js";
export function createRideHub({ id, name, description, duration, max, type, occupancy, }) {
    const newRide = new Ride(id);
    const newInfo = new RideInfo(newRide, name, description, type, duration, occupancy);
    const newCounter = new RideCounter(newRide, max);
    const newTimer = new RideTimer(newRide, duration);
    const newQueue = new RideQueue(newRide);
    newRide.counter = newCounter;
    newRide.timer = newTimer;
    newRide.queue = newQueue;
    const rideObj = {
        ride: newRide,
        info: newInfo,
        counter: newCounter,
        timer: newTimer,
        queue: newQueue,
    };
    return rideObj;
}
export function hydrateRide(rideObj) { }
const ride1 = createRideHub(commandLineCoasterInfo);
console.log(ride1);
// CREATE SOME RIDES STILL!!!
export function seedInstance() {
    // setup Park Classes and connect
}
//# sourceMappingURL=createRides.js.map