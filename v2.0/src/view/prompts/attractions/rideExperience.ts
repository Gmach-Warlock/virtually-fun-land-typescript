import type { Attraction } from "../../../types/attractionsTypeDefs.js";
import type { RideName } from "../../../types/guestTypeDefs.js";

export function rideExperiencePrompt(attraction: Attraction) {
  const type = attraction.general.name as RideName;
  const lookup: Record<RideName, string> = {
    "Command Line Coaster": `This is a dark ride in a black terminal. Sharp twists and turns help to drive cheers and screams from the guests. The guests ride in the terminal cursor, and fly through various functions and iterations which keep the guests thrilled and entertained until the final clearout function happens. This is a rush to clear out all of the memory leaks and escape through the final run of twisting and turning commands!`,
    "Frozen Channel": `Enjoy this exhilarating ride through a web channel which ends up going through a bad ci/cd pipeline which cause it to start slowing and fight against a freeze! As the guests pass through as the data they are entertained by CORS requests and CRUD operations around them. The final drop allows the group to not only escape the channel but also get a nice refreshing cool off! Caution: You will get wet!!`,
    "Multi Threaded Processor": `A family fun ride which takes guests through each of the threads of a modern CPU architecture. Learn how 0's and 1's are used to create data and follow along on a wave of binary as it moves the boat through the sockets. The different input and output patterns light up the imagination, and the song of the input/output system captivates all ages.`,
  };
  return lookup[type];
}
