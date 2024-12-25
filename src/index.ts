/**
 * Given:
 * type User = { id: string; name: string; age: number}
 * class Error {...}
 * interface I { method(this: ThisType<I>, ...params: any[])}
 * function effectThunk (): void
 * function logMsg(this: {timestamp: string}, msg: string): void
 */
/**
 * NAME                   USED ON         ACTION                EXAMPLE
 * ! Exclude                Unions          Excludes members      Exclude<'a' | 1, string> -> 1
 * * Extract                Unions          Extracts members      Extract<'a' | 1, string> -> 'a'
 * ! Omit                   Objects         Excludes properties   Omit<User, 'id'> -> {name: string; age: number}
 * * Pick                   Objects         Extracts properties   Pick<UserObj, 'id'> -> {id: string}
 * ! Partial                Objects         Make props optional   Partial<User> -> {id?: string; name?: string; age?: number}
 * * Required               Objects         Make props required   Required<Partial<User>>> -> User
 * * Readonly               Objects         Make props readonly   Readyonly<User> -> {readonly id: string; readonly name: string; readonly age: number}
 * ? Record                 Unions,Types    Make KV object type   Record<'ceo'|'cog', User> -> {ceo: User, cog: User}
 * ! NonNullable            Unions          Omit null | undefined NonNullable<Type | undefined> -> Type
 * ? Awaited                Promises        infer unwrapped types Awaited<number, Promise<string> -> number | string
 * ? ReturnType             Functions       infer fn return type  ReturnType<typeof effectThunk> -> void
 * ? Parameters             Functions       infer fn parameters   Parameters<typeof effectThunk> -> []
 * ? InstanceType           Classes         infer obj instanceof  InstanceType<typeof Error> -> <(error instanceof Error === true)>
 * ? ThisType               Functions/Objs? infer this of object  I::method(this: ThisType<I>, params... any[]) -> this<(I)>
 *      [example](https://www.geeksforgeeks.org/typescript-thistypetype-utility-type/)
 * ? ConstructorParameters  Classes         infer new(...params)  ConstructorParameters<typeof Error> -> [message: string, options?: {context: any}]
 *      [example](https://www.geeksforgeeks.org/typescript-constructorparameters-utility-type/)
 * * ThisParameterType      Functions/Objs? infer this context    ThisParameterType<typeof logMsg> -> this<({timestamp: string})>
 *      [example](https://www.geeksforgeeks.org/typescript-thisparametertypetype-utility-type/)
 * ! OmitThisParameter      Functions/Objs? make tuple w/o this   OmitThisParameter<typeof logMsg> -> (msg: string) => void
 *      [example](https://www.geeksforgeeks.org/typescript-omitthisparameter-utility-type/)
 * ! Lowercase              strings         make all chars lower  Lowercase<typeof ("HelloWorld" | "BOO")> -> "helloworld" | "boo"
 * * Uppercase              strings         make all chars upper  Uppercase<typeof ("HelloWorld" | "boo")> -> "HELLOWORLD" | "BOO"
 * ! Uncapitalize           strings         make first char lower Uncapitalize<typeof ("HelloWord" | "BOO")> -> "helloWorld" | "bOO"
 * * Capitalize             strings         make first char upper Capitalize<typeof ("helloWorld" | "boo")> -> "HelloWorld" | "Boo"...
 * * ...
 */

// built-in-expansions
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
 * ? Rename of NonNullable<T>
 */
export type NonNullish<T> = NonNullable<T>;
/**
 * ? Inverse (?) of NonNullish<T>
 */
export type Nullish<T> = T | null | undefined;

// sanity
export { Equal, Equals } from "./sanity/equal.js";
export {
  Expect,
  ExpectTo,
  ExpectToBeFalse,
  ExpectToBeFalsy,
  ExpectToBeNull,
  ExpectToBeNullish,
  ExpectToBeTrue,
  ExpectToBeTruthy,
  ExpectToBeUndefined,
} from "./sanity/expect.js";
export { Test } from "./sanity/test.js";
export { Suite } from "./sanity/suite.js";
export { f } from "./sanity/false.js";
export { t } from "./sanity/true.js";
// logic
export { False } from "./logic/false.js";
export { True } from "./logic/true.js";
