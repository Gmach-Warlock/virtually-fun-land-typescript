import type { RideInfoObj } from "../types/rideInterfaces.js";

export const commandLineCoasterInfo: RideInfoObj = {
  id: "CommandLineCoaster-coaster-1",
  name: "Command Line Coaster",
  description:
    "A high flying adventure through a virtual command line interface!",
  type: "Roller Coaster",
  duration: 2,
  max: 30,
  occupancy: 4,
};

export const frozenChannelInfo: RideInfoObj = {
  id: "FrozenChannel-water-1",
  name: "Frozen Channel",
  description:
    "A refreshing ride in which you must escape the freezing site, and drop to safety. Try to stay dry!!",
  type: "Water Ride",
  duration: 3,
  max: 25,
  occupancy: 6,
};

export const multiThreadedProcessorInfo: RideInfoObj = {
  id: "MultiThreadedProcessor-family-1",
  name: "Multi Threaded Processor",
  description:
    "A high flying adventure through a virtual command line interface!",
  type: "Family Ride",
  duration: 1,
  max: 30,
  occupancy: 4,
};

export const rideInfoArr: RideInfoObj[] = [
  commandLineCoasterInfo,
  frozenChannelInfo,
  multiThreadedProcessorInfo,
];
