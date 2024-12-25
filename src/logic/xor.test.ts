import { expect, suite, test } from "vitest";
import { ExpectTo } from "../sanity/expect";
import { Equal } from "./equal";
import { Suite } from "../sanity/suite";
import { Test } from "../sanity/test";
import { $t } from "../sanity/verity";
import { Xor } from "./xor";

suite("Xor<A, B>", () => {
  type XorPasses = Suite<
    "Nor<A, B>",
    [
      Test<"Xor<T,T>", [ExpectTo<Equal<false, Xor<true, true>>>]>,
      Test<"Xor<T,F>", [ExpectTo<Equal<true, Xor<true, false>>>]>,
      Test<"Xor<F,T>", [ExpectTo<Equal<true, Xor<false, true>>>]>,
      Test<"Xor<F,F>", [ExpectTo<Equal<false, Xor<false, false>>>]>,
    ]
  >;
  test("Truth Table for Xor<A, B>", () => {
    const xor: XorPasses = [
      "Nor<A, B>",
      [
        ["Xor<T,T>", [$t]],
        ["Xor<T,F>", [$t]],
        ["Xor<F,T>", [$t]],
        ["Xor<F,F>", [$t]],
      ],
    ];
    expect(xor).toBeTruthy();
  });
});
