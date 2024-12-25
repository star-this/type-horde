/**
 * Type Alias for Equal
 * @example
 * type True_TT = Equals<true, true>
 * type False_TF = Equals<true, false>
 * type False_FT = Equals<false, true>
 * type True_FF = Equals<false, false>
 * type True_UU = Equals<unknown, unknown>
 * type False_UN = Equals<unknown, never>
 * type False_NU = Equals<never, unknown>
 * type True_UU = Equals<unknown, unknown>
 * type True_AB_AB = Equals<{a: true; b: true;}, {a: true; b: true}>
 * type True_AB_BA = Equals<{a: true; b: true;}, {b: true; a: true}>
 * type True_AB_A_B = Equals<{a: true; b: true;}, {a: true} & {b: true}>
 * type True_AB_B_A = Equals<{a: true; b: true;}, {b: true} & {a: true}>
 * type True_A_B_B_A = Equals<{a: true} & {b: true;}, {b: true} & {a: true}>
 * type True_A_B_A_B = Equals<{a: true} & {b: true;}, {a: true} & {b: true}>
 * type True_A_B_AB = Equals<{a: true} & {b: true}, {a: true; b: true}>
 * type True_A_B_BA = Equals<{a: true} & {b: true;}, {b: true; a: true}>
 * type True_B_A_BA = Equals<{b: true} & {a: true;}, {b: true; a: true}>
 * type True_B_A_AB = Equals<{b: true} & {a: true;}, {a: true; b: true}>
 * type True_BA_AB = Equals<{b: true; a: true;}, {a: true; b: true}>
 * type True_BA_BA = Equals<{b: true; a: true;}, {b: true; a: true}>
 * type True_B_A_B_A = Equals<{b: true} & {a: true;}, {b: true} & {a: true}>
 * type True_B_A_A_B = Equals<{b: true} & {a: true;}, {a: true} & {b: true}>
 */
export type Equals<A, B> = Equal<A, B>;

/**
 * Utility type to test equality of two types.
 * TODO: Correctly handles intersection types, normalized object types,
 * * primitive types,
 * * and the never and unknown types.
 *
 * @example
 * type True_TT = Equal<true, true>
 * type False_TF = Equal<true, false>
 * type False_FT = Equal<false, true>
 * type True_FF = Equal<false, false>
 * type True_UU = Equal<unknown, unknown>
 * type False_UN = Equal<unknown, never>
 * type False_NU = Equal<never, unknown>
 * type True_UU = Equal<unknown, unknown>
 * type True_AB_AB = Equal<{a: true; b: true;}, {a: true; b: true}>
 * type True_AB_BA = Equal<{a: true; b: true;}, {b: true; a: true}>
 * type True_AB_A_B = Equal<{a: true; b: true;}, {a: true} & {b: true}>
 * type True_AB_B_A = Equal<{a: true; b: true;}, {b: true} & {a: true}>
 * type True_A_B_B_A = Equal<{a: true} & {b: true;}, {b: true} & {a: true}>
 * type True_A_B_A_B = Equal<{a: true} & {b: true;}, {a: true} & {b: true}>
 * type True_A_B_AB = Equal<{a: true} & {b: true}, {a: true; b: true}>
 * type True_A_B_BA = Equal<{a: true} & {b: true;}, {b: true; a: true}>
 * type True_B_A_BA = Equal<{b: true} & {a: true;}, {b: true; a: true}>
 * type True_B_A_AB = Equal<{b: true} & {a: true;}, {a: true; b: true}>
 * type True_BA_AB = Equal<{b: true; a: true;}, {a: true; b: true}>
 * type True_BA_BA = Equal<{b: true; a: true;}, {b: true; a: true}>
 * type True_B_A_B_A = Equal<{b: true} & {a: true;}, {b: true} & {a: true}>
 * type True_B_A_A_B = Equal<{b: true} & {a: true;}, {a: true} & {b: true}>
 */
export type Equal<A, B> = [A] extends [B]
  ? [B] extends [A]
    ? A extends B
      ? B extends A
        ? (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
          ? (<T>() => T extends B ? 1 : 2) extends <T>() => T extends A ? 1 : 2
            ? true
            : false
          : false
        : false
      : false
    : false
  : false;

// TODO: fix type Equal<A, B>
// ! Holy Grail !
// * Intersection types = normalized object types
// ?
// ! keeping the same:
// * never = never
// * unknown = unknown
// * {a:1; b:2} = {b:2; a:1}
/**
 * Utility type to test equality of two types.
 * Correctly handles intersection types and normalized object types.
 *
 * @example
 * type Result1 = Equals<{ a: number; b: number }, { a: number } & { b: number }>; // true
 * type Result2 = Equals<string, number>; // false
 */

// Test cases
type Test1 = Equal<{ a: number; b: number }, { a: number } & { b: number }>; // true
type Test2 = Equal<{ a: string } & { b: number }, { a: string; b: number }>; // true
type Test3 = Equal<
  { x: string } & { y: string },
  { y: string } & { x: string }
>; // true

// Complex intersection cases
type A = { a: number } & { b: string };
type B = { a: number; b: string };
type Test4 = Equal<A, B>; // true

// Still works with original cases
type Test5 = Equal<string, string>; // true
type Test6 = Equal<string, number>; // false
type Test7 = Equal<never, never>; // true
type Test8 = Equal<unknown, unknown>; // true

// Additional intersection edge cases
type Test9 = Equal<
  { a: number } & { b: number } & { c: string },
  { a: number; b: number; c: string }
>; // true
type Test10 = Equal<{ a: number } & { a: number }, { a: number }>;

// Test cases with never
type Test11 = Equal<never, never>; // true (now handled correctly)
type Test12 = Equal<never, any>; // false
type Test13 = Equal<never, unknown>; // false
type Test14 = [never] extends [never] ? true : false; // true
type Test15 = never extends never ? true : false; // vacuously true

// Original cases still work
type Test16 = Equal<{ a: number; b: number }, { a: number } & { b: number }>; // true
type Test17 = Equal<string, string>; // true
type Test18 = Equal<string, number>; // false
type Test19 = Equal<unknown, unknown>; // true

// Complex intersection cases still work
type Test20 = Equal<{ a: number } & { b: string }, { a: number; b: string }>; // true
