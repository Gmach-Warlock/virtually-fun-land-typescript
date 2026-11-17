import type { RideInfo } from "../types/attractionsTypeDefs.js";

export const commandLineCoasterInfo: RideInfo = {
  id: "CommandLineCoaster-coaster-1",
  name: "Command Line Coaster",
  description:
    "A high flying adventure through a virtual command line interface!",
  type: "ride",
  category: "roller coaster",
  duration: 4,
  max: 30,
  perTurn: 4,
};

export const frozenChannelInfo: RideInfo = {
  id: "FrozenChannel-water-1",
  name: "Frozen Channel",
  description:
    "A refreshing ride in which you must escape the freezing site, and drop to safety. Try to stay dry!!",
  type: "ride",
  category: "water ride",
  duration: 5,
  max: 25,
  perTurn: 6,
};

export const multiThreadedProcessorInfo: RideInfo = {
  id: "MultiThreadedProcessor-family-1",
  name: "Multi Threaded Processor",
  description:
    "A high flying adventure through a virtual command line interface!",
  type: "ride",
  category: "family ride",
  duration: 10,
  max: 30,
  perTurn: 15,
};

export const rideInfoArr: RideInfo[] = [
  commandLineCoasterInfo,
  frozenChannelInfo,
  multiThreadedProcessorInfo,
];
