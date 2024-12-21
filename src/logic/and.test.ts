import { expect, suite, test } from "vitest";
import { ExpectTo } from "../sanity/expect";
import { Equal } from "../sanity/equal";
import { Suite } from "../sanity/suite";
import { Test } from "../sanity/test";
import { t } from "../sanity/true";
import { And } from "./and";

suite("And<A, B>", () => {
  type AndPasses = Suite<
    "And<A,B>",
    [
      Test<"And<T,T>", [ExpectTo<Equal<true, And<true, true>>>]>,
      Test<"And<T,F>", [ExpectTo<Equal<false, And<true, false>>>]>,
      Test<"And<F,T>", [ExpectTo<Equal<false, And<false, true>>>]>,
      Test<"And<F,F>", [ExpectTo<Equal<false, And<false, false>>>]>,
    ]
  >;
  test("Truth Table for A ^ B", () => {
    const and: AndPasses = [
      "And<A,B>",
      [
        ["And<T,T>", [t]],
        ["And<T,F>", [t]],
        ["And<F,T>", [t]],
        ["And<F,F>", [t]],
      ],
    ];
    expect(and).toBeTruthy();
  });
});
