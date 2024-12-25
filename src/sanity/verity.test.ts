import { expect, suite, test } from "vitest";
import { Equals } from "../logic/equal";
import { Suite } from "./suite";
import { Test } from "./test";
import {
  $f,
  $isFalse,
  $isNever,
  $isTrue,
  $n,
  $t,
  IsNever,
  NeverNeverLand,
} from "./verity";
import { Extends } from "./extends";

// ! test: constants

suite("$t", () => {
  type $tIsTrue = Suite<"$t", [Test<"is true?", [true]>]>;
  test("$t === true", () => {
    const suite: $tIsTrue = ["$t", [["is true?", [$t]]]];

    expect($t).toBe(true);
    expect(suite).toBeTruthy();
  });
});

suite("$f", () => {
  type $tIsFalse = Suite<"$f", [Test<"is false?", [false]>]>;
  test("$f === false", () => {
    const suite: $tIsFalse = ["$f", [["is false?", [$f]]]];

    expect($f).toBe(false);
    expect(suite).toBeTruthy();
  });
});

suite("$n", () => {
  type $nIsNever = Suite<"$n", [Test<"is never?", [never]>]>;
  test("$n is (hacked) never constant", () => {
    const verity: $nIsNever = ["$n", [["is never?", [$n]]]];

    expect(verity).toBeTruthy();
  });
});

// ! test: Types

suite("IsNever<T>", () => {
  type IsNeverPasses = Suite<
    "IsNever<T>",
    [
      Test<"T: never -> true", [IsNever<never>]>,
      Test<"T: unknown -> false", [IsNever<unknown>]>,
      Test<"T: unknown | never -> false", [IsNever<unknown | never>]>,
      Test<"T: unknown & never -> true", [IsNever<unknown & never>]>,
    ]
  >;
  test("Type Suite passes", () => {
    const suite: IsNeverPasses = [
      "IsNever<T>",
      [
        ["T: never -> true", [$t]],
        ["T: unknown -> false", [$f]],
        ["T: unknown | never -> false", [$f]],
        ["T: unknown & never -> true", [$t]],
      ],
    ];
    expect(suite).toBeTruthy();
  });
  type NeverIsNever = IsNever<never>;
  test("IsNever<never>: true", () => {
    const verity: NeverIsNever = $t;
    expect(verity).toBe(true);
  });
  type UnknownIsNever = IsNever<unknown>;
  test("IsNever<unknown>: false", () => {
    const verity: UnknownIsNever = $f;
    expect(verity).toBe(false);
  });
  type UnknownOrNeverIsUnknown = IsNever<unknown | never>;
  test("IsNever<unknown | never>: false", () => {
    const verity: UnknownOrNeverIsUnknown = $f;
    expect(verity).toBe(false);
  });
  type UnknownAndNeverIsNever = IsNever<unknown & never>;
  test("IsNever<unknown & never>: true", () => {
    const verity: UnknownAndNeverIsNever = $t;
    expect(verity).toBe(true);
  });
});

suite("NeverNeverLand<T>", () => {
  type NeverNeverLandPasses = Suite<
    "NeverNeverLand<T>",
    [
      Test<"T: unknown -> false", [NeverNeverLand<unknown>]>,
      Test<"T: never -> false", [NeverNeverLand<never>]>,
      Test<"T: unknown | never -> false", [NeverNeverLand<unknown | never>]>,
      Test<"T: unknown & never -> false", [NeverNeverLand<unknown & never>]>,
    ]
  >;
  test("Types Pass", () => {
    const suite: NeverNeverLandPasses = [
      "NeverNeverLand<T>",
      [
        ["T: unknown -> false", [$f]],
        ["T: never -> false", [$f]],
        ["T: unknown | never -> false", [$f]],
        ["T: unknown & never -> false", [$f]],
      ],
    ];
    expect(suite).toBeTruthy();
  });
  type NeverNeverLandIsUnknown = NeverNeverLand<unknown>;
  test("NeverNeverLand<unknown>: false", () => {
    const verity: NeverNeverLandIsUnknown = $f;
    expect(verity).toBe(false);
  });
  type NeverNeverLandIsNever = NeverNeverLand<never>;
  test("NeverNeverLand<never>: false", () => {
    const verity: NeverNeverLandIsNever = $f;
    expect(verity).toBe(false);
  });
  type NeverNeverLandIsUnknownOrNever = NeverNeverLand<unknown | never>;
  test("NeverNeverLand<unknown | never>: false", () => {
    const verity: NeverNeverLandIsUnknownOrNever = $f;
    expect(verity).toBe(false);
  });
  type NeverNeverLandIsUnknownAndNever = NeverNeverLand<unknown & never>;
  test("NeverNeverLand<unknown & never>: false", () => {
    const verity: NeverNeverLandIsUnknownAndNever = $f;
    expect(verity).toBe(false);
  });
});

suite("never: Basic never behaviors", () => {
  type BasicNeverBehaviors = Suite<
    "___ extends ___ ? true : false",
    [
      Test<"never extends any", [never extends any ? true : false]>,
      Test<"any extends never", [any extends never ? true : false]>,
      Test<"unknown extends never", [unknown extends never ? true : false]>,
      Test<"never extends unknown", [never extends unknown ? true : false]>,
    ]
  >;
  test("extends", () => {
    const extensions: BasicNeverBehaviors = [
      "___ extends ___ ? true : false",
      [
        ["never extends any", [$t]],
        ["any extends never", [$f]],
        ["unknown extends never", [$f]],
        ["never extends unknown", [$t]],
      ],
    ];
    expect(extensions).toBeTruthy();
  });
});

suite(
  "never: conditionals with unions and intersections and maybe extensions",
  () => {
    type ConditionalsWithUnionsAndIntersectionsAndMaybeExtensions = Suite<
      "(___ extends?) ___ &| ___ ? true : false",
      [
        Test<"never | never", [never | never]>,
        Test<"never & never", [never & never]>,
        Test<"boolean | never", [boolean | never]>,
        Test<"boolean & never", [boolean & never]>,

        Test<"never extends never", [never extends never ? true : false]>,
        Test<"boolean extends never", [boolean extends never ? true : false]>,
        Test<
          "boolean | never extends never",
          [boolean | never extends never ? true : false]
        >,
        Test<
          "boolean & never extends never",
          [boolean & never extends never ? true : false]
        >,

        Test<
          "never extends boolean | never",
          [never extends boolean | never ? true : false]
        >,
        Test<
          "never extends boolean & never",
          [never extends boolean & never ? true : false]
        >,
        Test<
          "[never] extends [boolean | never]",
          [[never] extends [boolean | never] ? true : false]
        >,
        Test<
          "[never] extends [boolean & never]",
          [[never] extends [boolean & never] ? true : false]
        >,
        Test<"[never] extends never", [[never] extends never ? true : false]>,
        Test<
          "[never] extends never | boolean",
          [[never] extends never | boolean ? true : false]
        >,
        Test<
          "[never] extends never & boolean",
          [[never] extends never & boolean ? true : false]
        >,
      ]
    >;
    test("&|", () => {
      const cond_andOr_maybeExtends: ConditionalsWithUnionsAndIntersectionsAndMaybeExtensions =
        [
          "(___ extends?) ___ &| ___ ? true : false",
          [
            ["never | never", [$n]],
            ["never & never", [$n]],
            ["boolean | never", [$t]],
            ["boolean & never", [$n]],

            ["never extends never", [$n]],
            ["boolean extends never", [$f]],

            ["boolean | never extends never", [$f]],
            ["boolean & never extends never", [$n]],

            ["never extends boolean | never", [$t]],
            ["never extends boolean & never", [$n]],

            ["[never] extends [boolean | never]", [$t]],
            ["[never] extends [boolean & never]", [$t]],

            ["[never] extends never", [$f]],
            ["[never] extends never | boolean", [$f]],
            ["[never] extends never & boolean", [$f]],
          ],
        ];
      expect(cond_andOr_maybeExtends).toBeTruthy();
    });
  },
);

suite("never: in mapped types", () => {
  type NeverInMappedTypes = Suite<
    "MappedTypes",
    [
      Test<"{ [K in never]: string }", [{ [K in never]: string }]>,
      Test<"{ [K in string]: never }", [{ [K in string]: never }]>,
      Test<"Record<never, string>", [Record<never, string>]>,
    ]
  >;
  test("Using never in Mapped types", () => {
    const mappedTypes: NeverInMappedTypes = [
      "MappedTypes",
      [
        ["{ [K in never]: string }", $n],
        ["{ [K in string]: never }", $n],
        ["Record<never, string>", $n],
      ],
    ];
    expect(mappedTypes).toBeTruthy();
  });
});

suite("never: in function types", () => {
  type NeverInFns = Suite<
    "functions",
    [
      Test<"() => never", [() => never]>,
      Test<"(arg: never) => void", [(arg: never) => void]>,
      Test<
        "Parameters<(arg: never) => void>",
        [Parameters<(arg: never) => void>]
      >,
      Test<"ReturnType<() => never>", [ReturnType<() => never>]>,
    ]
  >;
  test("function types", () => {
    const funcStuf: NeverInFns = [
      "functions",
      [
        ["() => never", $n],
        ["(arg: never) => void", $n],
        ["Parameters<(arg: never) => void>", $n],
        ["ReturnType<() => never>", $n],
      ],
    ];
    expect(funcStuf).toBeTruthy();
  });
});

suite("never: tagged objects", () => {
  type TaggedObj<T> = T extends any ? { _tag: T } : never;
  type NeverInTaggedObjects = Suite<
    "TaggedObjects",
    [
      Test<"T: string", [TaggedObj<"1">]>,
      Test<"T: never", [TaggedObj<never>]>,
      Test<"T: string | never", [TaggedObj<"3" | never>]>,
      Test<"T: string & never", [TaggedObj<"4" & never>]>,
    ]
  >;
  test("Tag or no Tag", () => {
    const tagged: NeverInTaggedObjects = [
      "TaggedObjects",
      [
        ["T: string", $n],
        ["T: never", $n],
        ["T: string | never", $n],
        ["T: string & never", $n],
      ],
    ];
    expect(tagged).toBeTruthy();
  });
});

suite("never: in Tuples", () => {
  type NeverInSequences = Suite<
    "NeverSequences",
    [
      Test<"[never]", [[never]]>,
      Test<"never[]", [never[]]>,
      Test<
        "[] extends [never] ? true : false",
        [[] extends [never] ? true : false]
      >,
      Test<
        "[never] extends [] ? true : false",
        [[never] extends [] ? true : false]
      >,
    ]
  >;
  test("never: weird cases", () => {
    const weird: NeverInSequences = [
      "NeverSequences",
      [
        ["[never]", $n],
        ["never[]", $n],
        ["[] extends [never] ? true : false", [$f]],
        ["[never] extends [] ? true : false", [$f]],
      ],
    ];
    expect(weird).toBeTruthy();
  });
});

suite("never: Neverify<T>", () => {
  type Neverify<T> = T extends never ? true : false;
  type Neverified = Suite<
    "Neverify",
    [
      Test<"T: { a: never }>", [Neverify<{ a: never }>]>,
      Test<
        "T: { [K in never]: string }>",
        [Neverify<{ [K in never]: string }>]
      >,
      Test<"T: never | string", [Neverify<never | string>]>,
      Test<"T: never & string", [Neverify<never & string>]>,
    ]
  >;
  test("Neverify<T> = T extends never ? true : false", () => {
    const howSoonIsNever: Neverified = [
      "Neverify",
      [
        ["T: { a: never }>", [$n]],
        ["T: { [K in never]: string }>", $n],
        ["T: never | string", [$f]],
        ["T: never & string", [$n]],
      ],
    ];
    expect(howSoonIsNever).toBeTruthy();
  });
});

suite("never: Promises, Unwrapped and Awaited", () => {
  type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
  type HowLongUntilThisIsOver = Suite<
    "UnwrappedPromises",
    [
      Test<"T: Promise<never>", [UnwrapPromise<Promise<never>>]>,
      Test<"T: never", [UnwrapPromise<never>]>,
    ]
  >;
  test(">90% of my time goes into testing", () => {
    const tooLong: HowLongUntilThisIsOver = [
      "UnwrappedPromises",
      [
        ["T: Promise<never>", [$n]],
        ["T: never", [$n]],
      ],
    ];
    expect(tooLong).toBeTruthy();
  });
  type ThisShouldHelp_Huh = Suite<
    "AwaitedPromises",
    [
      Test<"T: Promise<never>", [Awaited<Promise<never>>]>,
      Test<"T: never", [Awaited<never>]>,
    ]
  >;
  const stillTooLong: ThisShouldHelp_Huh = [
    "AwaitedPromises",
    [
      ["T: Promise<never>", [$n]],
      ["T: never", [$n]],
    ],
  ];
  expect(stillTooLong).toBeTruthy();
});

suite("never: template literal types", () => {
  type Prefix<T extends string | number | bigint | boolean | null | undefined> =
    never | `prefix-${T}`;
  type Prefixed = Suite<
    "TemplateLitTypes",
    [
      Test<"T: never", [Prefix<never>]>,
      Test<
        "never | T: string",
        [
          | never
          | Prefix<"I'm glad I have a non-digital GF--too bad I don't get to see her ever b/c of coding...">,
        ]
      >,
    ]
  >;
  test("prefix-When do I stop hurting myself with this code?", () => {
    const blueChristmas: Prefixed = [
      "TemplateLitTypes",
      [
        ["T: never", [$n]],
        ["never | T: string", $n],
      ],
    ];
    expect(blueChristmas).toBeTruthy();
  });
});

suite("never: Intersection edge cases", () => {
  type ItsANumber = (string & never) | number;
  type ItsANever = (string | never) & number;
  test("...", () => {
    const num: ItsANumber = 42;
    expect(num).toBe(42);
    const nev: ItsANever = $n;
    expect(nev).toBe($n);
  });
});

// suite.skip("never: weird function...", () => {
//   type WeirdFn = ((x: string) => number) & ((x: never) => never); // ! Function type that can only be called with string
//   test.skip("...weird...", () => {
//     // TODO: fix type?! should it even be done? can it even be done? is this like the atomic bomb situation?
//     const weirdFn: WeirdFn = (x: string) => {
//       if (typeof x === "string") {
//         return +x;
//       }
//       return $n;
//     };
//     expect(weirdFn("1")).toBe(1);
//     expect(weirdFn($n)).toBe($n);
//   });
// });

suite("never: Recursion", () => {
  // Recursive types with never
  type Recursive<T> = T extends unknown ? [T, Recursive<never>] : never;
  type Hmmm = Recursive<string>;
  test("one-level recursion", () => {
    const hmmm: Hmmm = ["hmmm", $n];
    expect(hmmm[0]).toBe("hmmm");
    expect(hmmm[1]).toBe($n);
  });
});

suite("never: keyof stuff", () => {
  type KeyOfNever = keyof never;
  type KeyOfNeverPasses = Suite<
    "KeyOfNever",
    [Test<"KeyOfNever equals PropertyKey", [Equals<KeyOfNever, PropertyKey>]>]
  >;
  test("keyof never", () => {
    const unionsAreEqual: KeyOfNeverPasses = [
      "KeyOfNever",
      [["KeyOfNever equals PropertyKey", [$t]]],
    ];
    expect(unionsAreEqual).toBeTruthy();
  });
  type KeyOfMappedNever = { [K in never]: string };
  type KeyOfMappedNeverPasses = Suite<
    "KeyOfMappedNever",
    [Test<"KeyOfMappedNever extends {}", [Extends<{}, KeyOfMappedNever>]>]
  >;
  test("type empty object", () => {
    const emptyObj: KeyOfMappedNeverPasses = [
      "KeyOfMappedNever",
      [["KeyOfMappedNever extends {}", [$t]]],
    ];
    expect(emptyObj).toBeTruthy();
  });
});

suite("fun w/ strings & never...", () => {
  type HelloWorld = "Hello World";
  type BinaryString42 = "00101010";

  type Detect<Expected, T> = Expected extends T ? true : NeverNeverLand<T>;

  type FirstChar<S extends string> = S extends `${infer C}${infer _haracters}`
    ? C
    : never;
  type RestChars<S extends string> = S extends `${infer C}${infer _haracters}`
    ? _haracters
    : never;
  type FirstCharIfNumber<S> =
    S extends `${infer C extends number}${infer _haracters}` ? C : never;
  type StartsWithNumber<S extends string> =
    S extends `${infer C extends number}${infer _haracters}`
      ? C extends number
        ? true
        : false
      : never;

  test("'H' is the First char of 'Hello World'", () => {
    const char0IsH: Detect<"H", FirstChar<HelloWorld>> = $t;
    expect(char0IsH).toBe(true);
  });
  test("'ello World' is the Rest of the string 'Hello World'", () => {
    const stringAfterH: Detect<"ello World", RestChars<HelloWorld>> = $t;
    expect(stringAfterH).toBe(true);
  });
  test("'H' is the First char of 'Hello World', but it's not a number, so: never", () => {
    const char0Is_: Detect<"H", FirstCharIfNumber<HelloWorld>> = $n;
    expect(char0Is_).toBe($n);
  });
  test("The First char of 00101010 (42) is, in fact, a number", () => {
    const char0IsNumber: Detect<true, StartsWithNumber<BinaryString42>> = $t;
    expect(char0IsNumber).toBe(true);
  });
  test("'0' is the First char of 00101010 (42), which is a number, so: true", () => {
    const char0Is0: Detect<0, FirstCharIfNumber<BinaryString42>> = $t;
    expect(char0Is0).toBe(true);
  });
});

// ! functions

suite("$isTrue(value: unknown): value is true", () => {
  test("null -> false", () => {
    expect($isTrue(null)).toBe(false);
  });
  test("undefined -> false", () => {
    expect($isTrue(undefined)).toBe(false);
  });
  test("true -> true", () => {
    expect($isTrue(true)).toBe(true);
  });
  test("false -> false", () => {
    expect($isTrue(false)).toBe(false);
  });
  test("0 -> false", () => {
    expect($isTrue(0)).toBe(false);
  });
  test("1 -> false", () => {
    expect($isTrue(1)).toBe(false);
  });
  test("0n -> false", () => {
    expect($isTrue(0n)).toBe(false);
  });
  test("1n -> false", () => {
    expect($isTrue(1n)).toBe(false);
  });
  test("'' -> false", () => {
    expect($isTrue("")).toBe(false);
  });
  test("'true' -> false", () => {
    expect($isTrue("true")).toBe(false);
  });
  test("[] -> false", () => {
    expect($isTrue([])).toBe(false);
  });
  test("{} -> false", () => {
    expect($isTrue({})).toBe(false);
  });
});

suite("$isFalse(value: unknown): value is false", () => {
  test("null -> false", () => {
    expect($isFalse(null)).toBe(false);
  });
  test("undefined -> false", () => {
    expect($isFalse(undefined)).toBe(false);
  });
  test("true -> false", () => {
    expect($isFalse(true)).toBe(false);
  });
  test("false -> true", () => {
    expect($isFalse(false)).toBe(true);
  });
  test("0 -> false", () => {
    expect($isFalse(0)).toBe(false);
  });
  test("1 -> false", () => {
    expect($isFalse(1)).toBe(false);
  });
  test("0n -> false", () => {
    expect($isFalse(0n)).toBe(false);
  });
  test("1n -> false", () => {
    expect($isFalse(1n)).toBe(false);
  });
  test("'' -> false", () => {
    expect($isFalse("")).toBe(false);
  });
  test("'true' -> false", () => {
    expect($isFalse("true")).toBe(false);
  });
  test("[] -> false", () => {
    expect($isFalse([])).toBe(false);
  });
  test("{} -> false", () => {
    expect($isFalse({})).toBe(false);
  });
});

suite("$isNever(value: unknown): value is never)", () => {
  test("null -> false", () => {
    expect($isNever(null)).toBe(false);
  });
  test("undefined -> false", () => {
    expect($isNever(undefined)).toBe(false);
  });
  test("true -> false", () => {
    expect($isNever(true)).toBe(false);
  });
  test("false -> false", () => {
    expect(typeof false === "boolean").toBe(true);
    expect($isNever(false)).toBe(false);
  });
  test("NaN -> false", () => {
    expect($isNever(NaN)).toBe(false);
  });
  test("-Infinity -> false", () => {
    expect($isNever(-Infinity)).toBe(false);
  });
  test("Infinity -> false", () => {
    expect($isNever(Infinity)).toBe(false);
  });
  test("0 -> false", () => {
    expect($isNever(0)).toBe(false);
  });
  test("1 -> false", () => {
    expect($isNever(1)).toBe(false);
  });
  test("0n -> false", () => {
    expect($isNever(0n)).toBe(false);
  });
  test("1n -> false", () => {
    expect($isNever(1n)).toBe(false);
  });
  test("'' -> false", () => {
    expect($isNever("")).toBe(false);
  });
  test("'true' -> false", () => {
    expect($isNever("true")).toBe(false);
  });
  test("[] -> false", () => {
    expect($isNever([])).toBe(false);
  });
  test("{} -> false", () => {
    expect($isNever({})).toBe(false);
  });
  test("$n -> true", () => {
    expect($isNever($n)).toBe(true);
  });
});
