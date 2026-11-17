export function attractionsLogSubscriber(type, guest) {
    const lookup = {
        initialize: `${guest.general.name} is the last of the morning rush.`,
        enqueue: `${guest.general.name} has gotten in line for ${guest.track.pLocation}`,
        dequeue: `${guest.general.name} has finished at ${guest.track.pLocation}`,
        jump: `${guest.general.name} has entered the fast pass section.`,
        leave: `${guest.general.name} has decided to leave the line for ${guest.track.pLocation}`,
    };
    if (type !== "initialize")
        console.log(lookup[type]);
}
//# sourceMappingURL=attractionSubscriber.js.map