export function sleep(ms: number): Promise<void> {
  return new Promise((v) => window.setTimeout(v, ms));
}
