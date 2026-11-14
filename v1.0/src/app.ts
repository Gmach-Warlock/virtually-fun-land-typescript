import { createOpeningCrowdNames } from "./controller/guest/guestFactory.js";
import { startParkChain } from "./controller/park/parkTimeouts.js";

startParkChain();
createOpeningCrowdNames();
