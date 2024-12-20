import { expect, suite, test } from "vitest";
import { Suite } from "./suite";
import { Test } from "./test";
import { t } from "./true";

suite("t", () => {
  type SuitePasses = Suite<"t", [Test<"true?", [t]>]>;
  test("t === true", () => {
    const truth: t = true;
    const suite: SuitePasses = ["t", [["true?", [truth]]]];

    expect(truth).toBe(true);
    expect(suite).toBeTruthy();
  });
});
