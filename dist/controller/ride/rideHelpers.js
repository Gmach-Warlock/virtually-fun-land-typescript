import { Rider } from "../../model/ride/Rider.js";
export function createRider(ride, guest) {
    const newRider = new Rider(ride, guest);
    return newRider;
}
export function enqueueHelper(guest, ride, counter, head, tail) {
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
//# sourceMappingURL=rideHelpers.js.map