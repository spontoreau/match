import { assertEquals, fc, test } from "../devDependencies.ts";
import { match } from "./match.ts";
import { some, none } from "./option.ts";

test(
  `
  Given a value
  And some patterns
  And one of the patterns matches the value
  When exeucting the match
  Then the matching pattern returned some result
`,
  () => {
    const value = 1;

    const expected = some("1");

    const actual = match<number, string>(value)(
      [(v) => v === 1, () => "1"],
      [(v) => v === 2, () => "2"]
    )();

    assertEquals(actual, expected);
  },
);

test(
  `
  Given a value
  And some patterns
  And no pattern matches the value
  When exeucting the match
  Then the matching pattern returned no result
`,
  () => {
    const value = 3;

    const expected = none;

    const actual = match<number, string>(value)(
      [(v) => v === 1, () => "1"],
      [(v) => v === 2, () => "2"]
    )();

    assertEquals(actual, expected);
  },
);

test(
  `
  Given a value
  And some patterns
  And no pattern matches the value
  And a default pattern execution
  When exeucting the match
  Then the matching pattern returned some value from the default execution`,
  () => {
    const value = 3;

    const expected = some("3");

    const actual = match<number, string>(value)(
      [(v) => v === 1, () => "1"],
      [(v) => v === 2, () => "2"]
    )(_ => "3");

    assertEquals(actual, expected);
  },
);
