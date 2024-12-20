import { expect, suite, test } from "vitest";
import { Suite } from "../sanity/suite";
import { Test } from "../sanity/test";
import { t } from "../sanity/true";
import { False } from "./false";
import { Equal } from "../sanity/equal";
import { ExpectTo } from "../sanity/expect";
import { Not } from "./not";
import { True } from "./true";

suite("False", () => {
  type FalsePasses = Suite<
    "False",
    [
      Test<"False -> false", [ExpectTo<Equal<false, False>>]>,
      Test<"Not<False>> -> true", [ExpectTo<Equal<true, Not<False>>>]>,
    ]
  >;
  test("False -> false; Not<False> -> true", () => {
    const faux: FalsePasses = [
      "False",
      [
        ["False -> false", [t]],
        ["Not<False>> -> true", [t]],
      ],
    ];
    expect(faux).toBeTruthy();
  });
});

suite("False<P>", () => {
  type FalsePasses = Suite<
    "False<P>",
    [
      Test<"False<true> -> false", [ExpectTo<Equal<false, False<true>>>]>,
      Test<
        "Not<False<true>>> -> true",
        [ExpectTo<Equal<true, Not<False<true>>>>]
      >,
      Test<"False<True> -> false", [ExpectTo<Equal<false, False<True>>>]>,
      Test<
        "Not<False<True>> -> true",
        [ExpectTo<Equal<true, Not<False<True>>>>]
      >,
      Test<
        "False<True<True>> -> false",
        [ExpectTo<Equal<false, False<True<True>>>>]
      >,
      Test<
        "Not<False<True<True>>> -> true",
        [ExpectTo<Equal<true, Not<False<True<True>>>>>]
      >,
      Test<
        "False<True<False>> -> true",
        [ExpectTo<Equal<true, False<True<False>>>>]
      >,
      Test<
        "Not<False<True<False>>> -> false",
        [ExpectTo<Equal<false, Not<False<True<False>>>>>]
      >,
      Test<
        "True<False<True>> -> false",
        [ExpectTo<Equal<false, True<False<True>>>>]
      >,
      Test<
        "Not<True<False<True>>> -> true",
        [ExpectTo<Equal<true, Not<True<False<True>>>>>]
      >,
    ]
  >;
  test("False -> false; Not<False> -> true", () => {
    const faux: FalsePasses = [
      "False<P>",
      [
        ["False<true> -> false", [t]],
        ["Not<False<true>>> -> true", [t]],
        ["False<True> -> false", [t]],
        ["Not<False<True>> -> true", [t]],
        ["False<True<True>> -> false", [t]],
        ["Not<False<True<True>>> -> true", [t]],
        ["False<True<False>> -> true", [t]],
        ["Not<False<True<False>>> -> false", [t]],
        ["True<False<True>> -> false", [t]],
        ["Not<True<False<True>>> -> true", [t]],
      ],
    ];
    expect(faux).toBeTruthy();
  });
});
