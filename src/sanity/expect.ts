/**
 * ? Type Alias for true literal
 * ! Semantically useful for test Suites and Tests
 */
export type t = true;

/**
 * ? Type Alias for false literal
 * ! Semantically useful for test Suites and Tests
 */
export type f = false;

/**
 * ? Type Alias for Expect
 * ! Semantically useful when pairing with Equal and true:
 * * type t = true;
 * * ExpectTo<Equal<true, t>>
 */
export type ExpectTo<T> = Expect<T>;

/**
 * ? Expect<T>: T should be true
 * ! Semantically useful when paring with Equal and 2 types:
 * * type a = true;
 * * type b = true
 * * Expect<Equals<a, b>
 */
export type Expect<T> = T extends true ? true : never;

/**
 * ? ExpectToBeTrue<T>: T should be true
 * ! shortcut to check if T is true
 * * ExpectToBeTrue<t>
 */
export type ExpectToBeTrue<T> = T extends true ? true : never;

/**
 * ? ExpectToBeTrue<T>: T should be true
 * ! shortcut to check if T is false
 */
export type ExpectToBeFalse<T> = T extends false ? true : never;
