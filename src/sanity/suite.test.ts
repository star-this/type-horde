import { expect, suite, test } from "vitest";
import { Suite } from "./suite.js";
import { Test } from "./test.js";

suite("Suite", () => {
  type SuitePasses = Suite<"Sanity", [Test<"OnlyTest", [true]>]>;
  test("suite passes: named, & all tests are true", () => {
    const suite: SuitePasses = ["Sanity", [["OnlyTest", [true]]]];
    expect(suite).toBeTruthy();
  });
});
