import { assertEquals, fc, test } from "../devDependencies.ts";
import { match } from "./match.ts";
import { none, some } from "./option.ts";

test(
  `
  Given a value
  And some patterns
  And one of the patterns matches the value
  When exeucting the match
  Then the matching pattern returned some result
`,
  () => {
    fc.assert(
      fc.property(
        fc.anything(),
        (value: unknown) => {
          const expected = some(JSON.stringify(value));

          const actual = match(value)(
            [(v) => true, (v) => JSON.stringify(v)],
            [(v) => false, (v) => undefined],
          )();

          assertEquals(actual, expected);
        },
      ),
    );
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
    fc.assert(
      fc.property(
        fc.anything(),
        (value: unknown) => {
          const expected = none;

          const actual = match(value)(
            [(v) => false, (v) => v],
            [(v) => false, (v) => v],
          )();

          assertEquals(actual, expected);
        },
      ),
    );
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
    fc.assert(
      fc.property(
        fc.anything(),
        (value: unknown) => {
          const expected = some(JSON.stringify(value));

          const actual = match(value)(
            [(v) => false, (v) => undefined],
            [(v) => false, (v) => undefined],
          )((_) => JSON.stringify(_));

          assertEquals(actual, expected);
        },
      ),
    );
  },
);
