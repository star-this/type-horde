import { expect, suite, test } from "vitest";
import { Test } from "./test";

suite("Test", () => {
  type Test<Name, Expectations> = ["Minimal", [true]];
  test("type: name & expectation (true)", () => {
    const minimal: Test<"Minimal", [true]> = ["Minimal", [true]];

    expect(minimal).toBeTruthy();
  });
});
