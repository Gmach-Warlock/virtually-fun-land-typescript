export function guestLobSubscriber(type, guest) {
    const lookup = {
        initialize: "A decent crowd of people have shown up today for opening!!",
        add: `${guest.name} has entered the park!`,
        remove: `${guest.name} has left the park!`,
        view: `${guest.name} is currently ${guest.status?.status}`,
    };
    if (!lookup || !lookup[type])
        return;
    console.log(lookup[type]);
}
//# sourceMappingURL=guestSubscribers.js.map