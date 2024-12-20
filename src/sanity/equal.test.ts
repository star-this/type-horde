import { expect, suite, test } from "vitest";
import { Suite } from "./suite";
import { Test } from "./test";
import { t } from "./true";
import { Equal, Equals } from "./equal";
import { f } from "./false";

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
  type EqualPasses = Suite<
    "Equal",
    [
      Test<"Yes: AB and BA", [Equal<AB, BA>]>,
      Test<"No: AB and A_B", [Equal<AB, A_B>]>,
      Test<"No: BA and A_B", [Equal<BA, A_B>]>,
    ]
  >;
  test("Equal", () => {
    const equal: EqualPasses = [
      "Equal",
      [
        ["Yes: AB and BA", [t]],
        ["No: AB and A_B", [f]],
        ["No: BA and A_B", [f]],
      ],
    ];
    expect(equal).toBeTruthy();
  });
  type EqualsPasses = Suite<
    "Equals",
    [
      Test<"Yes: AB and BA", [Equals<AB, BA>]>,
      Test<"No: AB and A_B", [Equals<AB, A_B>]>,
      Test<"No: BA and A_B", [Equals<BA, A_B>]>,
    ]
  >;
  test("Equals", () => {
    const equals: EqualsPasses = [
      "Equals",
      [
        ["Yes: AB and BA", [t]],
        ["No: AB and A_B", [f]],
        ["No: BA and A_B", [f]],
      ],
    ];
    expect(equals).toBeTruthy();
  });
});
