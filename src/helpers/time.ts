export function getMinutesAndSeconds(totalSeconds: number) {
  const minutes = padNumber(Math.floor(totalSeconds / 60));
  const seconds = padNumber(totalSeconds % 60);
  return { minutes, seconds };
}

function padNumber(number: number) {
  return number.toString().padStart(2, "0");
}
