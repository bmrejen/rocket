export function getMinutesAndSeconds(secondsCount: number): { minutes: string; seconds: string } {
  const minutes = Math.floor(secondsCount / 60)
    .toString()
    .padStart(2, "0");
  const seconds = String(secondsCount % 60).padStart(2, "0");
  return { minutes, seconds };
}
