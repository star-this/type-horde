import { expect, suite, test } from "vitest";
import { ExpectTo } from "../sanity/expect";
import { Equal } from "../sanity/equal";
import { Suite } from "../sanity/suite";
import { Test } from "../sanity/test";
import { t } from "../sanity/true";
import { Nor } from "./nor";

suite("Nor<A, B>", () => {
  type NorPasses = Suite<
    "Nor<A, B>",
    [
      Test<"Nor<T,T>", [ExpectTo<Equal<true, Nor<true, true>>>]>,
      Test<"Nor<T,F>", [ExpectTo<Equal<false, Nor<true, false>>>]>,
      Test<"Nor<F,T>", [ExpectTo<Equal<false, Nor<false, true>>>]>,
      Test<"Nor<F,F>", [ExpectTo<Equal<true, Nor<false, false>>>]>,
    ]
  >;
  test("Truth Table for Nor<A, B>", () => {
    const nor: NorPasses = [
      "Nor<A, B>",
      [
        ["Nor<T,T>", [t]],
        ["Nor<T,F>", [t]],
        ["Nor<F,T>", [t]],
        ["Nor<F,F>", [t]],
      ],
    ];
    expect(nor).toBeTruthy();
  });
});
