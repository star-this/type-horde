/**
 * ? Utility to Test Types
 * ! must include Expectation results in tuple:
 * ! this is where type t = true and type f = false come in handy!
 * * @example Test<"Example", [
 * *   ExpectTo<Equal<true, t>>,
 * *   ExpectTo<Equal<false, f>>
 * *] = ["Example", [t, f]]
 */
export type Test<
  TestName extends string,
  Expectations extends boolean[],
> = readonly [name: TestName, tests: Expectations];
