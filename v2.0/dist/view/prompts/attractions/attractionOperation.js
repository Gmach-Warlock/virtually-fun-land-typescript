export function logNextCab(attraction) {
    const amountToTake = attraction.metrics.perTurn * 2;
    let current = attraction.queue?.head;
    for (let i = 0; i < amountToTake && current; i++) {
        const mid = Math.floor(amountToTake / 2) - 1;
        if (i <= mid) {
            current.guest.track.pCurrently = "leaving";
            console.log(`${current.guest.general.name} is ${current.guest.track.pCurrently},`);
            current = current.next;
            continue;
        }
        if (i > mid) {
            current.guest.track.pCurrently = "riding";
            console.log(`${current.guest.general.name} is ${current.guest.track.pCurrently}`);
            current = current.next;
            continue;
        }
    }
}
export function logAttractionOperation(attraction) {
    console.log(`

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
${attraction.general.name} has started accepting the next occupants. `);
    logNextCab(attraction);
    console.log(`Please move into the next area to be placed in the attraction. 
    
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
`);
}
//# sourceMappingURL=attractionOperation.js.map