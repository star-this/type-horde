import { expect, suite, test } from "vitest";
import { Suite } from "./suite";
import { Test } from "./test";
import { t } from "./true";
import { f } from "./false";
import { Extend, Extends } from "./extends";

suite("Extend", () => {
  type ExtendPasses = Suite<
    "Extend",
    [
      Test<"Yes: Extend<boolean, true>", [Extend<boolean, true>]>,
      Test<"No: Extend<true, boolean>", [Extend<true, boolean>]>,
    ]
  >;
  test("Extend works backward", () => {
    const extend: ExtendPasses = [
      "Extend",
      [
        ["Yes: Extend<boolean, true>", [t]],
        ["No: Extend<true, boolean>", [f]],
      ],
    ];
    expect(extend).toBeTruthy();
  });
});

suite("Extends", () => {
  type ExtendsPasses = Suite<
    "Extends",
    [
      Test<"Yes: Extends<boolean, true>", [Extends<boolean, true>]>,
      Test<"No: Extends<true, boolean>", [Extends<true, boolean>]>,
    ]
  >;
  test("Extend works backward", () => {
    const _extends_: ExtendsPasses = [
      "Extends",
      [
        ["Yes: Extends<boolean, true>", [t]],
        ["No: Extends<true, boolean>", [f]],
      ],
    ];
    expect(_extends_).toBeTruthy();
  });
});
