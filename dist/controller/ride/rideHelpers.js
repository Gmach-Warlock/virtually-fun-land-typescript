import { Guest } from "../../model/guest/Guest.js";
import { Ride } from "../../model/ride/Ride.js";
import { Rider } from "../../model/ride/Rider.js";
export function createRider(ride, guest) {
    const newRider = new Rider(ride, guest);
    return newRider;
}
export function enqueueHelper(guest, ride) {
    const counter = ride.counter;
    let head = ride.queue?.head;
    let tail = ride.queue?.tail;
    if (counter === null ||
        counter === undefined ||
        head === null ||
        head === undefined ||
        tail === null ||
        tail === undefined)
        return;
    if (counter.count >= counter.max) {
        console.log(`The line is currently full. Please try again later. `);
        return;
    }
    const newRider = createRider(ride, guest);
    if (head === null && tail === null) {
        head = newRider;
        tail = newRider;
    }
    if (tail !== null && tail !== null) {
        const temp = tail;
        tail = newRider;
        temp.next = newRider;
    }
    counter.count += 1;
}
export function dequeuHelper(ride) {
    const counter = ride.counter;
    let head = ride.queue?.head;
    if (!counter || !head)
        return;
    if (head === null) {
        console.log("The line is currently empty");
        return;
    }
    const dequeued = head;
    head = head?.next;
    counter.count--;
    console.log(`${dequeued.guest.name} has gotten off ${ride.info.name}`);
}
export function jumpHelper(ride, guest) {
    //
}
//# sourceMappingURL=rideHelpers.js.map