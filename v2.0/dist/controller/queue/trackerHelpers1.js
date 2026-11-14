export function changePCurrently(queue, guest, reason) {
    const lookup = {
        enqueue: "waiting",
        dequeue: "riding",
        jump: "waiting",
        leave: "leaving",
    };
    guest.track.pCurrently = lookup[reason];
    guest.track.pLocation = queue.attraction.general.name;
}
//# sourceMappingURL=trackerHelpers1.js.map