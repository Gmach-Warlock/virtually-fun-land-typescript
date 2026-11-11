export function isCleanString(str: string) {
  if (str === "") {
    console.log(`Please enter something in the field. `);
    return false;
  }
  if (/<[^>]*>/.test(str)) {
    console.log(`NO HTML ALLOWED!`);
    return false;
  }
  if (/^\d+$/.test(str)) {
    console.log(`Please enter a string not a number here. `);
    return false;
  }
  return true;
}

export function isCleanNumber(str: string, numPossible: number) {
  if (str === "") {
    console.log(`Please enter something in the field. `);
    return false;
  }
  if (Number.isNaN(Number(str))) {
    console.log(`Please use a number not a string here. `);
    return false;
  }
  if (Number(str) < 0 || Number(str) > numPossible) {
    console.log(`Please enter a value within range. `);
    return false;
  }
  return true;
}
