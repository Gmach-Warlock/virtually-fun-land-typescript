# Virtually Fun Land

Virtually Fun Land is a virtual park simulation in the console. The park opens and a random amount of guests arrive, check in to the park, wait for attractions, then eventually wait for other attractions. It keeps a simple loop which runs consistently.

## Installation

- This is a typescript app designed for Node.js. In order to run in a version of it must be present on the operating device.
- The newest version of Node.js can be downloaded at their website. Please install if interested in running this program.

1. Click on the green button and copy the link to the repository.
2. cd into the project folder to clone into.
3. type npm clone 'weblink' to clone the repo.
4. type npm i or npm install to install the typescript dependencies.
5. type npm run build to compile into javascript
6. type npm run start to start the app

## Features

- Park opens with morning announcements and then a random number of guests which are taken from a group of regulars who all show up, and a group of random guests, in which any number can show up.
- The guests are then created to be either 'gamers', 'riders', 'watchers', or 'wanderers'. Guest will file to random attractions of their favorite type, or just roam for a while!
- Each Attraction has it's own description, duration, perTurn occupancy, and max line occupancy. The attractions are inside of setIntervals and each time the interval goes off, an announcement of who boards and who leaves happens.
- Games have a random score, so each time a player plays, they get a random score which is logged with the announcement. A scoreboard was in design, but not finished.
- Once npc's depart rides they have a chance of reboarding something else. This is handled by a different interval, and an rng function which gives a predetermined chance of npc's acting. The interval is set at 3 minutes right now, but feels like it needs to move.
- Wait times, and line counts are logged for each ride in the messages as well as The park's current attendance.
- The menu works except 4. Ride Attraction. Focus was more on the automated process of keeping the park running on this third run of this project.

## Patterns

- Factory patterns used in conjunction with the constructors to help inject the attractions and guests at startup. Factory is also used in conjunction with strategy to help create assembly line patterns.
- Listener Pattern is used with guest activities. More of this pattern should have been featured, but correlating different uses was difficult with time constraints and other features in mind.
- Lookup patterns are everywhere. This pattern feeds into all other patterns and is used to keep logic paths laid out, and help with 'Big O' efficiency.
- Singletons are used in conjunction with global state classes. Static private instance props and static getInstance functions added to them.
- Single Responsiblility used as much as possible. For the most part the project is decoupled accomplish this. There are always functions which can be re-factored and cleaned up.
- Typescript interfaces and type definitions allow for better implementation of Dependency Injection. Creating interfaces which are composed of or extended by smaller interfaces allows for better abstraction and seperation of concerns.

## Future

- This project has given a great glimpse of which concepts are used in all languages and which concepts are strictly web development concepts. Many of the features in this project can be implemented in frameworks to be displayed in html and css as well. This combines these patterns with other css patterns like CUBE or BEM to implement them, instead of the methods used to handle console input output.
- The goal is to continue to apply these concepts in better ways, and learn more of the concepts needed to create a professional full stack application.
