import { expect, suite, test } from "vitest";
import { ExpectTo } from "../sanity/expect";
import { Suite } from "../sanity/suite";
import { Test } from "../sanity/test";
import { $t } from "../sanity/verity";
import { Equal } from "./equal";
import { Or } from "./or";

suite("Or<A, B>", () => {
  type OrPasses = Suite<
    "Or<A, B>",
    [
      Test<"Or<T,T>", [ExpectTo<Equal<true, Or<true, true>>>]>,
      Test<"Or<T,F>", [ExpectTo<Equal<true, Or<true, false>>>]>,
      Test<"Or<F,T>", [ExpectTo<Equal<true, Or<false, true>>>]>,
      Test<"Or<F,F>", [ExpectTo<Equal<false, Or<false, false>>>]>,
    ]
  >;
  test("Truth Table for A v B", () => {
    const or: OrPasses = [
      "Or<A, B>",
      [
        ["Or<T,T>", [$t]],
        ["Or<T,F>", [$t]],
        ["Or<F,T>", [$t]],
        ["Or<F,F>", [$t]],
      ],
    ];
    expect(or).toBeTruthy();
  });
});
