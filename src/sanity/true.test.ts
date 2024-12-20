import { expect, suite, test } from "vitest";
import { Suite } from "./suite";
import { Test } from "./test";
import { t } from "./true";

suite("t", () => {
  type SuitePasses = Suite<"t", [Test<"true?", [true]>]>;
  test("t === true", () => {
    const suite: SuitePasses = ["t", [["true?", [t]]]];

    expect(t).toBe(true);
    expect(suite).toBeTruthy();
  });
});
