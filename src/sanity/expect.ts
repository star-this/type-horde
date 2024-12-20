/**
 * ? Type Alias for Expect
 * ! Semantically useful when pairing with Equal and true:
 * @example ExpectTo<Equal<true, true>>
 */
export type ExpectTo<T> = Expect<T>;

/**
 * ? Expect<T>: T should be true
 * ! Semantically useful when paring with Equal and 2 types:
 * @example Expect<Equals<true, true>
 */
export type Expect<T> = T extends true ? true : false;

/**
 * ? ExpectToBeTrue<T>: T should be true
 * ! shortcut to check if T is true
 * @example ExpectToBeTrue<true>
 */
export type ExpectToBeTrue<T> = T extends true ? true : false;

/**
 * ? ExpectToBeFalse<F>: F should be false
 * ! shortcut to check if F is false
 * @example ExpectToBeFalse<false>
 */
export type ExpectToBeFalse<T> = T extends false ? true : false;

/**
 * ? ExpectToBeTruthy<Ty>: Ty should be Truthy
 * ! NaN will currently be truthy...?!
 * TODO: figure out how to handlle NAN
 * @example ExpectToBeTruthy<0>
 */
export type ExpectToBeTruthy<Ty> = Ty extends false
  ? false
  : Ty extends undefined
  ? false
  : Ty extends null
  ? false
  : Ty extends 0
  ? false
  : Ty extends -0
  ? false
  : Ty extends ""
  ? false
  : true;

/**
 * ? ExpectToBeFalsy<Fy>: Fy should be Falsy
 * ! NaN will currently be truthy...?!
 * TODO: figure out how to handlle NAN
 * @example ExpectToBeFalsy<0>
 */
export type ExpectToBeFalsy<Fy> = Fy extends false
  ? true
  : Fy extends undefined
  ? true
  : Fy extends null
  ? true
  : Fy extends 0
  ? true
  : Fy extends -0
  ? true
  : Fy extends ""
  ? true
  : false;

/**
 * ? ExpectToBeNullish<Nsh>
 * ! effectively returns Nsh == null
 */
export type ExpectToBeNullish<Nsh> = Nsh extends null
  ? true
  : Nsh extends undefined
  ? true
  : false;

/**
 * ? ExpectToBeUndefined<Und>
 * ! returns typeof undefined === true
 */
export type ExpectToBeUndefined<Und> = Und extends undefined ? true : false;

/**
 * ? ExpectToBeNull<Nil>
 * ! returns typeof null === true
 */
export type ExpectToBeNull<Nil> = Nil extends null ? true : false;
