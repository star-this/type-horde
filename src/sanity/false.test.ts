import { expect, suite, test } from "vitest";
import { Suite } from "./suite";
import { Test } from "./test";
import { f } from "./false";

suite("f", () => {
  type SuitePasses = Suite<"f", [Test<"false?", [t]>]>;
  test("f === false", () => {
    const truth: f = false;
    const suite: SuitePasses = ["f", [["false?", [truth]]]];

    expect(truth).toBe(false);
    expect(suite).toBeTruthy();
  });
});
