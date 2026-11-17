export function determineIsWinner() {
  const value = Math.random();
  if (value >= 0.5) return true;
  return false;
}

export function determineNpcScore(total: number) {
  let wins: number = 0;
  let winner: boolean;
  for (let i = 0; i < total; i++) {
    winner = determineIsWinner();
    if (winner) wins++;
  }
  return wins;
}
