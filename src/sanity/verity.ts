// ! constants

/**
 * Constant for value of false literal
 * * Useful for type Suites and type Tests
 */
export const $f = false;
/**
 * Constant for value of true literal
 * * Useful for type Suites and type Tests
 */
export const $t = true;
/**
 *  (hack) Constant for value of "never literal" (even though DNE)...
 * * Useful for type Suites and type Tests
 * * The only way to get a constant of type never!
 */
export const $n: never = Symbol("never") as never;

// ! types

export type IsNever<T> = [T] extends [never] ? true : false;

export type NeverNeverLand<T> = IsNever<T> extends true ? false : false;

// ! functions

/**
 * Tests if value is true, and narrows type to true literal
 * @param value unknown
 * @returns boolean
 * @example
 * $isTrue(true) === true;
 * @example
 * $isTrue(false) === false;
 */
export function $isTrue(value: unknown): value is true {
  if (value != null && typeof value === "boolean" && value === true) {
    return true as const;
  }
  return false as const;
}
/**
 * Tests if value is false, and narrows type to false literal
 * @param value unknown
 * @returns Boolean
 * @example
 * $isFalse(true) === false;
 * @example
 * $isFalse(false) === true;
 */
export function $isFalse(value: unknown): value is false {
  if (value != null && typeof value === "boolean" && value === false) {
    return true as const;
  }
  return false as const;
}
/**
 *
 * @param value unknown
 * @returns Boolean
 * @example
 * $isNever($n: never) === true;
 * @example
 * $isNever(_: any) === false;
 */
export function $isNever<T>(
  value: T extends unknown ? T : never,
): value is never {
  if (value === $n) return true as const;
  if (value === undefined && typeof value !== "undefined") return true as const;
  if (value === null && typeof value !== "object") return true as const;
  if (typeof value === "boolean" && typeof value !== "boolean")
    return true as const;
  if (typeof value === "number" && typeof value !== "number")
    return true as const;
  if (typeof value === "bigint" && typeof value !== "bigint")
    return true as const;
  if (typeof value === "string" && typeof value !== "string")
    return true as const;
  if (typeof value === "symbol" && typeof value !== "symbol")
    return true as const;
  if (Array.isArray(value) && !Array.isArray(value)) return true as const;
  if (typeof value === "function" && typeof value !== "function")
    return true as const;
  if (typeof value === "object" && typeof value !== "object")
    return true as const;
  return false as const;
}
