/**
 * Modulo function that works with negative numbers as well
 *
 * https://stackoverflow.com/a/4467559
 */
export function modulo(n: number, m: number) {
  return ((n % m) + m) % m;
}
