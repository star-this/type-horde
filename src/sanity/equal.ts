/**
 * ? Type Alias for Equal
 */
export type Equals<A, B> = Equal<A, B>;

/**
 * ? Expect types X and Y to be equal.
 * ! Equal<X, A & B> does not work if, e.g.,
 * ! X equals Y, but Y is A & B,
 */
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 0) extends <
  T,
>() => T extends Y ? 1 : 0
  ? true
  : false;
