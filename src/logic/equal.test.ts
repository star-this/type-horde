import { expect, suite, test } from "vitest";
import { Suite } from "../sanity/suite";
import { Test } from "../sanity/test";
import { $f, $n, $t } from "../sanity/verity";
import { Equal, Equals } from "./equal.js";

suite("Equal/Equals", () => {
  type AB = {
    a: 1;
    b: 2;
  };
  type BA = {
    b: 2;
    a: 1;
  };
  type A = {
    a: 1;
  };
  type B = {
    b: 2;
  };
  type A_B = A & B;
  type B_A = B & A;
  type EqualPasses = Suite<
    "Equal",
    [
      Test<"true and true", [Equal<true, true>]>,
      Test<"true and false", [Equal<true, false>]>,
      Test<"false and true", [Equal<false, true>]>,
      Test<"false and false", [Equal<false, false>]>,

      Test<"unknown and unknown", [Equal<unknown, unknown>]>,
      Test<"unknown and never", [Equal<unknown, never>]>,
      Test<"never and unknown", [Equal<never, unknown>]>,
      Test<"never and never", [Equal<never, never>]>,

      Test<"any and any", [Equal<any, any>]>,
      Test<"any and never", [Equal<any, never>]>,
      Test<"never and any", [Equal<never, any>]>,

      Test<"any and unknown", [Equal<any, unknown>]>,
      Test<"unknown and any", [Equal<unknown, any>]>,

      Test<"AB and AB", [Equal<AB, AB>]>,
      Test<"AB and BA", [Equal<AB, BA>]>,
      Test<"AB and A_B", [Equal<AB, A_B>]>,
      Test<"AB and B_A", [Equal<AB, B_A>]>,
      Test<"BA and AB", [Equal<BA, AB>]>,
      Test<"BA and BA", [Equal<BA, BA>]>,
      Test<"BA and A_B", [Equal<BA, A_B>]>,
      Test<"BA and B_A", [Equal<BA, B_A>]>,
      Test<"B_A and AB", [Equal<B_A, AB>]>,
      Test<"B_A and BA", [Equal<B_A, BA>]>,
      Test<"B_A and A_B", [Equal<B_A, A_B>]>,
      Test<"B_A and B_A", [Equal<B_A, B_A>]>,
      Test<"A_B and AB", [Equal<A_B, AB>]>,
      Test<"A_B and BA", [Equal<A_B, BA>]>,
      Test<"A_B and A_B", [Equal<A_B, A_B>]>,
      Test<"A_B and B_A", [Equal<A_B, B_A>]>,
    ]
  >;
  test("Equal", () => {
    const equal: EqualPasses = [
      "Equal",
      [
        ["true and true", [$t]],
        ["true and false", [$f]],
        ["false and true", [$f]],
        ["false and false", [$t]],

        ["unknown and unknown", [$t]],
        ["unknown and never", [$f]],
        ["never and unknown", [$f]],
        ["never and never", [$t]],

        ["any and any", [$t]],
        ["any and never", [$f]],
        ["never and any", [$f]],

        ["any and unknown", [$f]],
        ["unknown and any", [$f]],

        ["AB and AB", [$t]],
        ["AB and BA", [$t]],
        ["AB and A_B", [$f]],
        ["AB and B_A", [$f]],
        ["BA and AB", [$t]],
        ["BA and BA", [$t]],
        ["BA and A_B", [$f]],
        ["BA and B_A", [$f]],
        ["B_A and AB", [$f]],
        ["B_A and BA", [$f]],
        ["B_A and A_B", [$t]],
        ["B_A and B_A", [$t]],
        ["A_B and AB", [$f]],
        ["A_B and BA", [$f]],
        ["A_B and A_B", [$t]],
        ["A_B and B_A", [$t]],
      ],
    ];
    expect(equal).toBeTruthy();
  });
  type EqualsPasses = Suite<
    "Equals",
    [
      Test<
        "2 identical Equals are Equal",
        [Equal<Equals<true, true>, Equals<true, true>>]
      >,
      Test<
        "Equals is Distributive",
        [Equals<Equal<true, true>, Equal<true, true>>]
      >,
    ]
  >;
  test("Equals", () => {
    const equals: EqualsPasses = [
      "Equals",
      [
        ["2 identical Equals are Equal", [$t]],
        ["Equals is Distributive", [$t]],
      ],
    ];
    expect(equals).toBeTruthy();
  });
});
