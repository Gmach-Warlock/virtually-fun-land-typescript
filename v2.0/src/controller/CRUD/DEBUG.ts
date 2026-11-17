export function DEBUG<T>(reason: string, logArr: T[]) {
  console.log(`DEBUG ---------------------------------`);
  console.log(reason);
  logArr.forEach((item) => console.log(item));
}
