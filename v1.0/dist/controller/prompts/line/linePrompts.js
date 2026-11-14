export function linePrompts(type, name) {
    const lookup = {
        add: `What is the name of the ride the ${name} wants to ride? `,
        remove: `What is the name of the ride ${name} wants to leave the line for?`,
        view: "Here are the people currently in that line: ",
        lineIn: `${name} has gotten in line`,
        lineOut: `${name} has decided to get out of line. Too much time...`,
    };
    return lookup[type];
}
//# sourceMappingURL=linePrompts.js.map