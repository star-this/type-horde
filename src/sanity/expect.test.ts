import { expect, suite, test } from "vitest";
import { Suite } from "./suite";
import { Test } from "./test";
import { t } from "./true";
import { f } from "./false";
import { Expect, ExpectTo, ExpectToBeFalse, ExpectToBeTrue } from "./expect";

suite("Expect", () => {
  type ExpectPasses = Suite<
    "Expect",
    [
      Test<"Yes: Expect<true>", [Expect<true>]>,
      Test<"No: Expect<false>", [Expect<false>]>,
    ]
  >;
  test("true then false", () => {
    const _expect_: ExpectPasses = [
      "Expect",
      [
        ["Yes: Expect<true>", [t]],
        ["No: Expect<false>", [f]],
      ],
    ];
    expect(_expect_).toBeTruthy();
  });
});

suite("ExpectTo", () => {
  type ExpectToPasses = Suite<
    "ExpectTo",
    [
      Test<"Yes: ExpectTo<true>", [ExpectTo<true>]>,
      Test<"No: ExpectTo<false>", [ExpectTo<false>]>,
    ]
  >;
  test("true then false", () => {
    const _expect_: ExpectToPasses = [
      "ExpectTo",
      [
        ["Yes: ExpectTo<true>", [t]],
        ["No: ExpectTo<false>", [f]],
      ],
    ];
    expect(_expect_).toBeTruthy();
  });
});

suite("ExpectToBeFalse", () => {
  type ExpectToBeFalsePasses = Suite<
    "ExpectToBeFalse",
    [
      Test<"No: ExpectToBeFalse<true>", [ExpectToBeFalse<true>]>,
      Test<"Yes: ExpectToBeFalse<false>", [ExpectToBeFalse<false>]>,
    ]
  >;
  test("true then false", () => {
    const _expect_: ExpectToBeFalsePasses = [
      "ExpectToBeFalse",
      [
        ["No: ExpectToBeFalse<true>", [f]],
        ["Yes: ExpectToBeFalse<false>", [t]],
      ],
    ];
    expect(_expect_).toBeTruthy();
  });
});

suite("ExpectToBeTrue", () => {
  type ExpectToBeTruePasses = Suite<
    "ExpectToBeTrue",
    [
      Test<"Yes: ExpectToBeTrue<true>", [ExpectToBeTrue<true>]>,
      Test<"No: ExpectToBeTrue<false>", [ExpectToBeTrue<false>]>,
    ]
  >;
  test("true then false", () => {
    const _expect_: ExpectToBeTruePasses = [
      "ExpectToBeTrue",
      [
        ["Yes: ExpectToBeTrue<true>", [t]],
        ["No: ExpectToBeTrue<false>", [f]],
      ],
    ];
    expect(_expect_).toBeTruthy();
  });
});

// TODO:
suite("ExpectToBeTruthy", () => {
  type ExpectPasses = Suite<
    "Expect",
    [
      Test<"Yes: Expect<true>", [Expect<true>]>,
      Test<"No: Expect<false>", [Expect<false>]>,
    ]
  >;
  test("true then false", () => {
    const _expect_: ExpectPasses = [
      "Expect",
      [
        ["Yes: Expect<true>", [t]],
        ["No: Expect<false>", [f]],
      ],
    ];
    expect(_expect_).toBeTruthy();
  });
});

// TODO: implement
suite("ExpectToBeFalsy", () => {
  test("true", () => {
    expect(true).toBe(true);
  });
});

// TODO: implement
suite("ExpectToBeNullish", () => {
  test("true", () => {
    expect(true).toBe(true);
  });
});

// TODO: implement
suite("ExpectToBeUndefined", () => {
  test("true", () => {
    expect(true).toBe(true);
  });
});

// TODO: implement
suite("ExpectToBeNull", () => {
  test("true", () => {
    expect(true).toBe(true);
  });
});
