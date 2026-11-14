import { vflRides } from "../../model/park/ParkRides.js";
export function logRush() {
    console.log(`The guests race towards their favorite attractions!.`);
    vflRides.rides.forEach((ride) => {
        console.log(ride.queue?.log());
    });
}
//# sourceMappingURL=openingGuests.js.map