export function toError(errorish: unknown): Error {
  const error =
    errorish instanceof Error ? errorish : new Error(String(errorish));
  return error;
}
