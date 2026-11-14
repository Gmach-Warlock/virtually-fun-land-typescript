export function determinePersonalityType() {
  const value = Math.random();
  if (!value) return;
  if (value > 0.6) return "rider";
  if (value > 0.3) return "gamer";
  if (value > 0.1) return "watcher";
  return "wanderer";
}

export function determineStartStatus() {
  const value = Math.random();
  if (!value) return;
  if (value > 0.3) return "regular";
  if (value > 0.1) return "fastPass";
  return "VIP";
}
