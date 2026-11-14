import { Guest } from "../../../model/guest/Guest.js";
export function logGuest(type, guest) {
    const lookup = {
        initialize: "",
        add: "A guest has entered the park.",
        remove: "A guest has left the park.",
        view: `${guest?.name} is currently at `,
    };
    console.log(lookup[type]);
}
//# sourceMappingURL=guestHelpers.js.map