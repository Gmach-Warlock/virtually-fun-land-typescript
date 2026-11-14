function openingGreeting() {
  console.log(`
Welcome to Virtually Fun Land, virtually fun for everyone. `);
}

function openingMenu() {
  console.log(`
What's your next destination?

1. Register Guest
2. Remove Guest
3. Look at Guest Directory
4. Ride an attraction
5. Check attraction line
6. Look at Attraction Directory
7. Exit
`);
}

export function startMenu() {
  openingGreeting();
  openingMenu();
}
