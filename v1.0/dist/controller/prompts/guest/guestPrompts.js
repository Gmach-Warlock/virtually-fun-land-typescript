export function guestPrompt(type) {
    const lookup = {
        initialize: `A decent crowd of people showed up at the opening
    `,
        add: "What is the name of the new guest? ",
        remove: "What is the name of the guest who is checking out for the day? ",
        view: "Here is a list of the guests currently in attendance: ",
        lineIn: "Who is going to get in line? ",
        lineOut: "Who is getting out of line?",
    };
    return lookup[type];
}
//# sourceMappingURL=guestPrompts.js.map