import { expect, suite, test } from "vitest";
import { Suite } from "../sanity/suite";
import { Test } from "../sanity/test";
import { t } from "../sanity/true";
import { f } from "../sanity/false";
import { Not } from "./not";

suite("Not", () => {
  type NotPasses = Suite<
    "Not",
    [
      Test<"Not<true> -> false", [Not<true>]>,
      Test<"Not<false> -> true", [Not<false>]>,
    ]
  >;
  test("~T the ~F", () => {
    const not: NotPasses = [
      "Not",
      [
        ["Not<true> -> false", [f]],
        ["Not<false> -> true", [t]],
      ],
    ];
    expect(not).toBeTruthy();
  });
});
