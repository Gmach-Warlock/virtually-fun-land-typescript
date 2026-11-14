function openParkBanner() {
  console.log(`
      <==It's that magical time: Opening Time!!!==>
      Virtually Fun Land is now open for business!! 
      |     |       |       |       |       |     |
      |     |       |       |       |       |     |
      |     |       |       |       |       |     |
      |     |       |       |       |       |     |
      |     |       |       |       |       |     |
      |     |       |       |       |       |     |
      |     |       |       |       |       |     |
      | | | | | | | | | | | | | | | | | | | | | | |

Please make your way forward and head into the admission lines. `);
}

function openingGates() {
  console.log(`
              <---- Virtually Fun Land ---->
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
|     |     |     |     |     |     |     |     |     |     
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
            <---- Virtually Entertaining ---->

`);
}

export function startGates() {
  openParkBanner();
  openingGates();
}
