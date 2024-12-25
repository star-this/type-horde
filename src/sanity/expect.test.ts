import { expect, suite, test } from "vitest";
import { Suite } from "./suite";
import { Test } from "./test";
import { $t } from "./verity";
import { $f } from "./verity";
import {
  Expect,
  ExpectTo,
  ExpectToBeFalse,
  // ExpectToBeFalsy,
  ExpectToBeNull,
  ExpectToBeNullish,
  ExpectToBeTrue,
  // ExpectToBeTruthy,
  ExpectToBeUndefined,
} from "./expect";

suite("Expect", () => {
  type ExpectPasses = Suite<
    "Expect",
    [
      Test<"Yes: Expect<true>", [Expect<true>]>,
      Test<"No: Expect<false>", [Expect<false>]>,
    ]
  >;
  test("first true then false", () => {
    const _expect_: ExpectPasses = [
      "Expect",
      [
        ["Yes: Expect<true>", [$t]],
        ["No: Expect<false>", [$f]],
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
  test("first true then false", () => {
    const _expect_: ExpectToPasses = [
      "ExpectTo",
      [
        ["Yes: ExpectTo<true>", [$t]],
        ["No: ExpectTo<false>", [$f]],
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
        ["No: ExpectToBeFalse<true>", [$f]],
        ["Yes: ExpectToBeFalse<false>", [$t]],
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
        ["Yes: ExpectToBeTrue<true>", [$t]],
        ["No: ExpectToBeTrue<false>", [$f]],
      ],
    ];
    expect(_expect_).toBeTruthy();
  });
});

// TODO: implement NaN type detection
suite.skip("ExpectToBeTruthy", () => {
  // type ExpectToBeTruthyPasses = Suite<
  //   "ExpectToBeTruthy",
  //   [
  //     Test<"Yes: ExpectToBeTruthy<true>", [ExpectToBeTruthy<true>]>,
  //     Test<"Yes: ExpectToBeTruthy<'true'>", [ExpectToBeTruthy<"true">]>,
  //     Test<"Yes: ExpectToBeTruthy<1>", [ExpectToBeTruthy<1>]>,
  //     Test<"Yes: ExpectToBeTruthy<{}>", [ExpectToBeTruthy<{}>]>,
  //     Test<"Yes: ExpectToBeTruthy<[]>", [ExpectToBeTruthy<[]>]>,
  //     Test<"No: ExpectToBeTruthy<false>", [ExpectToBeTruthy<false>]>,
  //     Test<"No: ExpectToBeTruthy<''>", [ExpectToBeTruthy<"">]>,
  //     Test<"No: ExpectToBeTruthy<0>", [ExpectToBeTruthy<0>]>,
  //     Test<"No: ExpectToBeTruthy<-0>", [ExpectToBeTruthy<-0>]>,
  //     Test<"No: ExpectToBeTruthy<null>", [ExpectToBeTruthy<null>]>,
  //     Test<"No: ExpectToBeTruthy<undefined>", [ExpectToBeTruthy<undefined>]>,
  //   ]
  // >;
  test.skip("5 truthy values then 6 falsy", () => {
    // const _expect_: ExpectToBeTruthyPasses = [
    //   "ExpectToBeTruthy",
    //   [
    //     ["Yes: ExpectToBeTruthy<true>", [_$t]],
    //     ["Yes: ExpectToBeTruthy<'true'>", [_$t]],
    //     ["Yes: ExpectToBeTruthy<1>", [_$t]],
    //     ["Yes: ExpectToBeTruthy<{}>", [_$t]],
    //     ["Yes: ExpectToBeTruthy<[]>", [_$t]],
    //     ["No: ExpectToBeTruthy<false>", [_$f]],
    //     ["No: ExpectToBeTruthy<''>", [_$f]],
    //     ["No: ExpectToBeTruthy<0>", [_$f]],
    //     ["No: ExpectToBeTruthy<-0>", [_$f]],
    //     ["No: ExpectToBeTruthy<null>", [_$f]],
    //     ["No: ExpectToBeTruthy<undefined>", [_$f]],
    //   ],
    // ];
    // expect(_expect_).toBeTruthy();
  });
});

// TODO: implement NaN type detection
suite.skip("ExpectToBeFalsy", () => {
  // type ExpectToBeFalsyPasses = Suite<
  //   "ExpectToBeFalsy",
  //   [
  //     Test<"No: ExpectToBeFalsy<true>", [ExpectToBeFalsy<true>]>,
  //     Test<"No: ExpectToBeFalsy<'true'>", [ExpectToBeFalsy<"true">]>,
  //     Test<"No: ExpectToBeFalsy<1>", [ExpectToBeFalsy<1>]>,
  //     Test<"No: ExpectToBeFalsy<{}>", [ExpectToBeFalsy<{}>]>,
  //     Test<"No: ExpectToBeFalsy<[]>", [ExpectToBeFalsy<[]>]>,
  //     Test<"Yes: ExpectToBeFalsy<false>", [ExpectToBeFalsy<false>]>,
  //     Test<"Yes: ExpectToBeFalsy<''>", [ExpectToBeFalsy<"">]>,
  //     Test<"Yes: ExpectToBeFalsy<0>", [ExpectToBeFalsy<0>]>,
  //     Test<"Yes: ExpectToBeFalsy<-0>", [ExpectToBeFalsy<-0>]>,
  //     Test<"Yes: ExpectToBeFalsy<null>", [ExpectToBeFalsy<null>]>,
  //     Test<"Yes: ExpectToBeFalsy<undefined>", [ExpectToBeFalsy<undefined>]>,
  //   ]
  // >;
  test.skip("5 truthy values then 6 falsy", () => {
    // const _expect_: ExpectToBeFalsyPasses = [
    //   "ExpectToBeFalsy",
    //   [
    //     ["No: ExpectToBeFalsy<true>", [_$f]],
    //     ["No: ExpectToBeFalsy<'true'>", [_$f]],
    //     ["No: ExpectToBeFalsy<1>", [_$f]],
    //     ["No: ExpectToBeFalsy<{}>", [_$f]],
    //     ["No: ExpectToBeFalsy<[]>", [_$f]],
    //     ["Yes: ExpectToBeFalsy<false>", [_$t]],
    //     ["Yes: ExpectToBeFalsy<''>", [_$t]],
    //     ["Yes: ExpectToBeFalsy<0>", [_$t]],
    //     ["Yes: ExpectToBeFalsy<-0>", [_$t]],
    //     ["Yes: ExpectToBeFalsy<null>", [_$t]],
    //     ["Yes: ExpectToBeFalsy<undefined>", [_$t]],
    //   ],
    // ];
    // expect(_expect_).toBeTruthy();
  });
});

suite("ExpectToBeNullish", () => {
  type ExpectToBeNullishPasses = Suite<
    "ExpectToBeNullish",
    [
      Test<"No: ExpectToBeNullish<true>", [ExpectToBeNullish<true>]>,
      Test<"No: ExpectToBeNullish<'true'>", [ExpectToBeNullish<"true">]>,
      Test<"No: ExpectToBeNullish<1>", [ExpectToBeNullish<1>]>,
      Test<"No: ExpectToBeNullish<{}>", [ExpectToBeNullish<{}>]>,
      Test<"No: ExpectToBeNullish<[]>", [ExpectToBeNullish<[]>]>,
      Test<"No: ExpectToBeNullish<false>", [ExpectToBeNullish<false>]>,
      Test<"No: ExpectToBeNullish<''>", [ExpectToBeNullish<"">]>,
      Test<"No: ExpectToBeNullish<0>", [ExpectToBeNullish<0>]>,
      Test<"No: ExpectToBeNullish<-0>", [ExpectToBeNullish<-0>]>,
      Test<"Yes: ExpectToBeNullish<null>", [ExpectToBeNullish<null>]>,
      Test<"Yes: ExpectToBeNullish<undefined>", [ExpectToBeNullish<undefined>]>,
    ]
  >;
  test("9 non-nullish values then 2 nullish", () => {
    const _expect_: ExpectToBeNullishPasses = [
      "ExpectToBeNullish",
      [
        ["No: ExpectToBeNullish<true>", [$f]],
        ["No: ExpectToBeNullish<'true'>", [$f]],
        ["No: ExpectToBeNullish<1>", [$f]],
        ["No: ExpectToBeNullish<{}>", [$f]],
        ["No: ExpectToBeNullish<[]>", [$f]],
        ["No: ExpectToBeNullish<false>", [$f]],
        ["No: ExpectToBeNullish<''>", [$f]],
        ["No: ExpectToBeNullish<0>", [$f]],
        ["No: ExpectToBeNullish<-0>", [$f]],
        ["Yes: ExpectToBeNullish<null>", [$t]],
        ["Yes: ExpectToBeNullish<undefined>", [$t]],
      ],
    ];
    expect(_expect_).toBeTruthy();
  });
});

suite("ExpectToBeUndefined", () => {
  type ExpectToBeUndefinedPasses = Suite<
    "ExpectToBeUndefined",
    [
      Test<"No: ExpectToBeUndefined<true>", [ExpectToBeUndefined<true>]>,
      Test<"No: ExpectToBeUndefined<'true'>", [ExpectToBeUndefined<"true">]>,
      Test<"No: ExpectToBeUndefined<1>", [ExpectToBeUndefined<1>]>,
      Test<"No: ExpectToBeUndefined<{}>", [ExpectToBeUndefined<{}>]>,
      Test<"No: ExpectToBeUndefined<[]>", [ExpectToBeUndefined<[]>]>,
      Test<"No: ExpectToBeUndefined<false>", [ExpectToBeUndefined<false>]>,
      Test<"No: ExpectToBeUndefined<''>", [ExpectToBeUndefined<"">]>,
      Test<"No: ExpectToBeUndefined<0>", [ExpectToBeUndefined<0>]>,
      Test<"No: ExpectToBeUndefined<-0>", [ExpectToBeUndefined<-0>]>,
      Test<"No: ExpectToBeUndefined<null>", [ExpectToBeUndefined<null>]>,
      Test<
        "Yes: ExpectToBeUndefined<undefined>",
        [ExpectToBeUndefined<undefined>]
      >,
    ]
  >;
  test("10 defined values then 1 undefined", () => {
    const _expect_: ExpectToBeUndefinedPasses = [
      "ExpectToBeUndefined",
      [
        ["No: ExpectToBeUndefined<true>", [$f]],
        ["No: ExpectToBeUndefined<'true'>", [$f]],
        ["No: ExpectToBeUndefined<1>", [$f]],
        ["No: ExpectToBeUndefined<{}>", [$f]],
        ["No: ExpectToBeUndefined<[]>", [$f]],
        ["No: ExpectToBeUndefined<false>", [$f]],
        ["No: ExpectToBeUndefined<''>", [$f]],
        ["No: ExpectToBeUndefined<0>", [$f]],
        ["No: ExpectToBeUndefined<-0>", [$f]],
        ["No: ExpectToBeUndefined<null>", [$f]],
        ["Yes: ExpectToBeUndefined<undefined>", [$t]],
      ],
    ];
    expect(_expect_).toBeTruthy();
  });
});

// TODO: implement
suite("ExpectToBeNull", () => {
  type ExpectToBeNullPasses = Suite<
    "ExpectToBeNull",
    [
      Test<"No: ExpectToBeNull<true>", [ExpectToBeNull<true>]>,
      Test<"No: ExpectToBeNull<'true'>", [ExpectToBeNull<"true">]>,
      Test<"No: ExpectToBeNull<1>", [ExpectToBeNull<1>]>,
      Test<"No: ExpectToBeNull<{}>", [ExpectToBeNull<{}>]>,
      Test<"No: ExpectToBeNull<[]>", [ExpectToBeNull<[]>]>,
      Test<"No: ExpectToBeNull<false>", [ExpectToBeNull<false>]>,
      Test<"No: ExpectToBeNull<''>", [ExpectToBeNull<"">]>,
      Test<"No: ExpectToBeNull<0>", [ExpectToBeNull<0>]>,
      Test<"No: ExpectToBeNull<-0>", [ExpectToBeNull<-0>]>,
      Test<"No: ExpectToBeNull<NaN>", [ExpectToBeNull<typeof NaN>]>,
      Test<"Yes: ExpectToBeNull<null>", [ExpectToBeNull<null>]>,
      Test<"No: ExpectToBeNull<undefined>", [ExpectToBeNull<undefined>]>,
    ]
  >;
  test("10 defined values then 1 undefined", () => {
    const _expect_: ExpectToBeNullPasses = [
      "ExpectToBeNull",
      [
        ["No: ExpectToBeNull<true>", [$f]],
        ["No: ExpectToBeNull<'true'>", [$f]],
        ["No: ExpectToBeNull<1>", [$f]],
        ["No: ExpectToBeNull<{}>", [$f]],
        ["No: ExpectToBeNull<[]>", [$f]],
        ["No: ExpectToBeNull<false>", [$f]],
        ["No: ExpectToBeNull<''>", [$f]],
        ["No: ExpectToBeNull<0>", [$f]],
        ["No: ExpectToBeNull<-0>", [$f]],
        ["No: ExpectToBeNull<NaN>", [$f]],
        ["Yes: ExpectToBeNull<null>", [$t]],
        ["No: ExpectToBeNull<undefined>", [$f]],
      ],
    ];
    expect(_expect_).toBeTruthy();
  });
});
