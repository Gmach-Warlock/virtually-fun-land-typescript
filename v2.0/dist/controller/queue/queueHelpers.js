export function enqueueHelper(guest, head, tail) {
    if (head === null && tail === null) {
        head = guest;
        tail = guest;
        return;
    }
    const temp = tail;
    tail = guest;
    if (temp !== null) {
        temp.next = guest;
    }
}
export function dequeueHelper(head, tail) {
    if (head === null || tail === null) {
        console.log(`There is nobody left in line`);
        return null;
    }
    const dequeuedObj = head;
    head = head.next ?? null;
    return dequeuedObj;
}
//# sourceMappingURL=queueHelpers.js.map