/**
 * ? PrettyReadable         Objects         nested types readable PrettyReadable<Type> -> Type (but not just opaque, shallow Type Names!)
 * ! NonNullish             Unions          Omit null | undefined NonNullish<Type | undefined> -> Type
 * * Nullish                Unions          Add null | undefined  Nullish<Type>
 */
//

/**
 * ? wrap types to make theme more readable on hover / two-slash
 */
export type PrettyReadable<T> = {
  [K in keyof T]: T[K];
} & {};

/**
 * * Rename of NonNullable<T>
 */
export type NonNullish<T> = NonNullable<T>;

/**
 * * Inverse (?) of NonNullish<T>
 */
export type Nullish<T> = T | null | undefined;
