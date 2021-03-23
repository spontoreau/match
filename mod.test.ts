// Copyright 2021 the match library authors (see: https://github.com/behaviorland/match).
// All rights reserved.
// MIT license.

import { assertEquals, test } from "./devDependencies.ts";
import * as mod from "./mod.ts";

test(
  `
  Given the match module
  When importing all the module
  Then the match function is available
`,
  () => {
    const expected = "function";
    const actual = typeof mod.match;
    assertEquals(actual, expected);
  },
);

test(
  `
  Given the match module
  When importing all the module
  Then the isSome function is available  
`,
  () => {
    const expected = "function";
    const actual = typeof mod.isSome;
    assertEquals(actual, expected);
  },
);

test(
  `
  Given the match module
  When importing all the module
  Then the isNone function is available  
`,
  () => {
    const expected = "function";
    const actual = typeof mod.isNone;
    assertEquals(actual, expected);
  },
);
