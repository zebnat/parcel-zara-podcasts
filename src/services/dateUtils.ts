export function millisecondsToHourMinute(milliseconds: number) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  minutes = minutes % 60;

  // Ensure two digits are always displayed
  let hoursStr = hours.toString().padStart(2, "0");
  let minutesStr = minutes.toString().padStart(2, "0");
  let secondsStr = seconds.toString().padStart(2, "0");

  return `${hoursStr}:${minutesStr}`;
}

export function formatDate(isoDate: string) {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}
