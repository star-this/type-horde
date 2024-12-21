import { expect, suite, test } from "vitest";
import { ExpectTo } from "../sanity/expect";
import { Equal } from "../sanity/equal";
import { Suite } from "../sanity/suite";
import { Test } from "../sanity/test";
import { t } from "../sanity/true";
import { Nand } from "./nand";

suite("Nand<A, B>", () => {
  type NandPassess = Suite<
    "Nand<A, B>",
    [
      Test<"Nand<T,T>", [ExpectTo<Equal<false, Nand<true, true>>>]>,
      Test<"Nand<T,F>", [ExpectTo<Equal<true, Nand<true, false>>>]>,
      Test<"Nand<F,T>", [ExpectTo<Equal<true, Nand<false, true>>>]>,
      Test<"Nand<F,F>", [ExpectTo<Equal<false, Nand<false, false>>>]>,
    ]
  >;
  test("Truth Table for Nand<A, B>", () => {
    const nand: NandPassess = [
      "Nand<A, B>",
      [
        ["Nand<T,T>", [t]],
        ["Nand<T,F>", [t]],
        ["Nand<F,T>", [t]],
        ["Nand<F,F>", [t]],
      ],
    ];
    expect(nand).toBeTruthy();
  });
});
