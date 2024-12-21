/**
 * ? Type Alias for Equal
 * * @example Equal<t, true>
 */
export type Equals<A, B> = Equal<A, B>;

/**
 * ? Expect types X and Y to be equal.
 * ! Equal<A, X & Y> does not work if, e.g.,
 * ! A union (B), but (B) union (X & Y),
 * * @example Equals<true, t>
 */
export type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T,
>() => T extends B ? 1 : 2
  ? true
  : false;
