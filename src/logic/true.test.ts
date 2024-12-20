import { expect, suite, test } from "vitest";
import { Suite } from "../sanity/suite";
import { Test } from "../sanity/test";
import { t } from "../sanity/true";
import { True } from "./true";
import { ExpectTo } from "../sanity/expect";
import { Equal } from "../sanity/equal";
import { Not } from "./not";
import { False } from "./false";

suite("True", () => {
  type TruePasses = Suite<
    "True",
    [
      Test<"True = true", [ExpectTo<Equal<True, true>>]>,
      Test<"True = Not<false>", [ExpectTo<Equal<True, Not<false>>>]>,
    ]
  >;
  test("true, Not<false>", () => {
    const tru: TruePasses = [
      "True",
      [
        ["True = true", [t]],
        ["True = Not<false>", [t]],
      ],
    ];
    expect(tru).toBeTruthy();
  });
});

suite("Truth Table with True<T>, False<F>, & Not<P>", () => {
  type Truth_Table_Passes = Suite<
    "True_T__Truth_Table",
    [
      Test<"True<True> -> True", [ExpectTo<Equal<True<True>, True>>]>,
      Test<"True<False> -> False", [ExpectTo<Equal<True<False>, False>>]>,
      Test<"False<True> -> False", [ExpectTo<Equal<False<True>, False>>]>,
      Test<"False<False> -> True", [ExpectTo<Equal<False<False>, True>>]>,

      Test<
        "True<Not<True>> -> False",
        [ExpectTo<Equal<True<Not<True>>, False>>]
      >,
      Test<
        "True<Not<False>> -> True",
        [ExpectTo<Equal<True<Not<False>>, True>>]
      >,
      Test<
        "False<Not<True>> -> True",
        [ExpectTo<Equal<True<Not<True>>, False>>]
      >,
      Test<
        "False<Not<False>> -> False",
        [ExpectTo<Equal<True<Not<True>>, False>>]
      >,

      Test<
        "Not<True<True>> -> False",
        [ExpectTo<Equal<Not<True<True>>, False>>]
      >,
      Test<
        "Not<True<False>> -> True",
        [ExpectTo<Equal<Not<True<False>>, True>>]
      >,
      Test<
        "Not<False<True>> -> True",
        [ExpectTo<Equal<Not<False<True>>, True>>]
      >,
      Test<
        "Not<False<False>> -> False",
        [ExpectTo<Equal<Not<False<False>>, False>>]
      >,

      Test<
        "Not<True<Not<True>>> -> True",
        [ExpectTo<Equal<Not<True<Not<True>>>, True>>]
      >,
      Test<
        "Not<True<Not<False>>> -> False",
        [ExpectTo<Equal<Not<True<Not<False>>>, False>>]
      >,
      Test<
        "Not<False<Not<True>>> -> False",
        [ExpectTo<Equal<Not<False<Not<True>>>, False>>]
      >,
      Test<
        "Not<False<Not<False>>> -> True",
        [ExpectTo<Equal<Not<False<Not<False>>>, True>>]
      >,

      Test<
        "True<Not<Not<True>>> -> True",
        [ExpectTo<Equal<True<Not<Not<True>>>, True>>]
      >,
      Test<
        "True<Not<Not<False>>> -> False",
        [ExpectTo<Equal<True<Not<Not<False>>>, False>>]
      >,
      Test<
        "False<Not<Not<True>>> -> False",
        [ExpectTo<Equal<False<Not<Not<True>>>, False>>]
      >,
      Test<
        "False<Not<Not<False>>> -> True",
        [ExpectTo<Equal<False<Not<Not<False>>>, True>>]
      >,
    ]
  >;
  test("Truth Table with True<T>, False<F>, & Not<P>", () => {
    const table: Truth_Table_Passes = [
      "True_T__Truth_Table",
      [
        ["True<True> -> True", [t]],
        ["True<False> -> False", [t]],
        ["False<True> -> False", [t]],
        ["False<False> -> True", [t]],
        ["True<Not<True>> -> False", [t]],
        ["True<Not<False>> -> True", [t]],
        ["False<Not<True>> -> True", [t]],
        ["False<Not<False>> -> False", [t]],
        ["Not<True<True>> -> False", [t]],
        ["Not<True<False>> -> True", [t]],
        ["Not<False<True>> -> True", [t]],
        ["Not<False<False>> -> False", [t]],
        ["Not<True<Not<True>>> -> True", [t]],
        ["Not<True<Not<False>>> -> False", [t]],
        ["Not<False<Not<True>>> -> False", [t]],
        ["Not<False<Not<False>>> -> True", [t]],
        ["True<Not<Not<True>>> -> True", [t]],
        ["True<Not<Not<False>>> -> False", [t]],
        ["False<Not<Not<True>>> -> False", [t]],
        ["False<Not<Not<False>>> -> True", [t]],
      ],
    ];
  });
});
