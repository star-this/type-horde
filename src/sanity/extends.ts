/**
 * ? type Alias for Extends
 * ! semantically convenient when, e.g.,
 * @example ExpectTo<Extend<boolean, true>>
 */
export type Extend<Supertype, Subtype> = Extends<Supertype, Subtype>;

/**
 * ? Extends checks if the 2nd type extends the 1st type
 * ! semantically convenient when, e.g.,
 * @example Expect<Extends<boolean, true>>
 */
export type Extends<Supertype, Subtype> = Subtype extends Supertype
  ? true
  : false;
