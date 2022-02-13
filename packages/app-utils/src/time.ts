const options: Intl.DateTimeFormatOptions = {
  dateStyle: "medium",
  timeStyle: "medium",
};
const dateTimeFormat = new Intl.DateTimeFormat("default", options);

export function numberToDateTimeString(n: number): string {
  return dateTimeFormat.format(n);
}
