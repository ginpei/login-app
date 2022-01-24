export function numberToDateTimeString(n: number): string {
  const options: Intl.DateTimeFormatOptions = {
    dateStyle: "medium",
    timeStyle: "medium",
  };
  return new Intl.DateTimeFormat("default", options).format(n);
}
