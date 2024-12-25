import { expect, suite, test } from "vitest";
import { Suite } from "../sanity/suite";
import { Test } from "../sanity/test";
import { $t } from "../sanity/verity";
import { ExpectTo } from "../sanity/expect";
import { Equal } from "./equal";
import { If } from "./if";

suite("If", () => {
  type IfThenPasses = Suite<
    "If: Cond -> Then",
    [Test<"Cond -> Then", [ExpectTo<Equal<true, If<true, true, false>>>]>]
  >;
  test("Cond: t -> Then", () => {
    const then: IfThenPasses = ["If: Cond -> Then", [["Cond -> Then", [$t]]]];
    expect(then).toBeTruthy();
  });
  type IfElsePasses = Suite<
    "If: ~Cond -> Else",
    [Test<"~Cond -> Else", [ExpectTo<Equal<false, If<false, true, false>>>]>]
  >;
  test("Cond: f -> Else", () => {
    const otherwise: IfElsePasses = [
      "If: ~Cond -> Else",
      [["~Cond -> Else", [$t]]],
    ];
    expect(otherwise).toBeTruthy();
  });
});
