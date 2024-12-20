import { expect, suite, test } from "vitest";
import { Suite } from "./suite";
import { Test } from "./test";
import { f } from "./false";

suite("f", () => {
  type SuitePasses = Suite<"f", [Test<"false?", [false]>]>;
  test("f === false", () => {
    const suite: SuitePasses = ["f", [["false?", [f]]]];

    expect(f).toBe(false);
    expect(suite).toBeTruthy();
  });
});
