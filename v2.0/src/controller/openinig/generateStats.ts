export function determinePersonalityType() {
  const value = Math.random();
  if (!value) return;
  if (value > 0.6) return "rider";
  if (value > 0.3) return "gamer";
  if (value > 0.1) return "watcher";
  return "wanderer";
}

export function determineVip() {
  const value = Math.random();
  if (!value) return;
  if (value > 0.1) return false;
  return true;
}

export function determineRandomAction() {
  const value = Math.random();
  if (!value) return;
  if (value > 0.6) return "ride";
  if (value > 0.2) return "play";
  if (value > 0.1) return "watch";
  return "roam";
}
