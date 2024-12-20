/**
 * ? Utility Type to run a Suite of Test types
 * ! must include Expectation results in tuple:
 * ! this is where type t = true and type f = false come in handy!
 * * @example Suite<"Example", [
 * *   Test<"Example", [
 * *     ExpectTo<Equal<true, t>>,
 * *     ExpectTo<Equal<false, f>>
 * *   ] = ["Example", [t, f]]>
 * * ]
 */
export type Suite<SuiteName, Tests> = readonly [
  name: SuiteName extends string ? SuiteName : never,
  suite: Tests extends [name: string, tests: boolean[]] ? Tests : never,
];
