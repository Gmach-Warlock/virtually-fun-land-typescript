import type { SimpleObj } from "../../../types/basicTypes.js";

export function ridePrompts(type: string) {
  const lookup: SimpleObj = {
    add: `
Which ride is the person getting on?
    
1. Command Line Coaster
2. Frozen Channel
3. Multi Threaded Processor

Please choose the appropriate value: `,
    remove:
      "What is the name of the guest who wants to leave the line they are in?",
    view: "",
    lineIn: "",
    lineOut: "",
  };
  return lookup[type];
}

export function openRidePrompt(name: string, duration: number, max: number) {
  console.log(`
           Attention Guests, 
${name} is now open to ride!! 
        Everyone come on down!! 
The length of the attraction is ${duration} minute${duration > 1 ? "s" : ""}.
It has a maximum line capacity of ${max} people.
        `);
}
