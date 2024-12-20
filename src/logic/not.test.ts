import { expect, suite, test } from "vitest";
import { Suite } from "../sanity/suite";
import { Test } from "../sanity/test";
import { t } from "../sanity/true";
import { Not } from "./not";
import { True } from "./true";
import { False } from "./false";
import { ExpectTo } from "../sanity/expect";
import { Equal } from "../sanity/equal";

suite("Not", () => {
  type NotPasses = Suite<
    "Not",
    [
      Test<"Not<true> -> false", [ExpectTo<Equal<false, Not<true>>>]>,
      Test<"Not<false> -> true", [ExpectTo<Equal<true, Not<false>>>]>,
    ]
  >;
  test("~T the ~F", () => {
    const not: NotPasses = [
      "Not",
      [
        ["Not<true> -> false", [t]],
        ["Not<false> -> true", [t]],
      ],
    ];
    expect(not).toBeTruthy();
  });
});

suite("Not<P>", () => {
  type Not_P_Passes = Suite<
    "Not<P>",
    [
      Test<"Not<True> -> false", [ExpectTo<Equal<false, Not<True>>>]>,
      Test<"Not<False> -> true", [ExpectTo<Equal<true, Not<False>>>]>,
    ]
  >;
  test("~T the ~F", () => {
    const not: Not_P_Passes = [
      "Not<P>",
      [
        ["Not<True> -> false", [t]],
        ["Not<False> -> true", [t]],
      ],
    ];
    expect(not).toBeTruthy();
  });
});

suite("Not<Not<P>>", () => {
  type Not_Not_P_Passes = Suite<
    "Not<Not<P>>",
    [
      Test<"Not<Not<True>> -> true", [ExpectTo<Equal<true, Not<Not<True>>>>]>,
      Test<
        "Not<Not<False>> -> false",
        [ExpectTo<Equal<false, Not<Not<False>>>>]
      >,
    ]
  >;
  test("~T the ~F", () => {
    const notnot: Not_Not_P_Passes = [
      "Not<Not<P>>",
      [
        ["Not<Not<True>> -> true", [t]],
        ["Not<Not<False>> -> false", [t]],
      ],
    ];
    expect(notnot).toBeTruthy();
  });
});
