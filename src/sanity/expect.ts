/**
 * ? Type Alias for Expect
 * ! Semantically useful when pairing with Equal and true:
 * * @example ExpectTo<Equal<true, t>>
 */
export type ExpectTo<T> = Expect<T>;

/**
 * ? Expect<T>: T should be true
 * ! Semantically useful when paring with Equal and 2 types:
 * * @example
 * * type a = t;
 * * type b = t;
 * * Expect<Equals<a, b>
 */
export type Expect<T> = T extends true ? true : never;

/**
 * ? ExpectToBeTrue<T>: T should be true
 * ! shortcut to check if T is true
 * * @example ExpectToBeTrue<t>
 */
export type ExpectToBeTrue<T> = T extends true ? true : never;

/**
 * ? ExpectToBeTrue<T>: T should be true
 * ! shortcut to check if T is false
 * * @example ExpectToBeFalse<f>
 */
export type ExpectToBeFalse<T> = T extends false ? true : never;
