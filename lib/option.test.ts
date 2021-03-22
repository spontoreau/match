import { assertEquals, fc, test } from "../devDependencies.ts";
import { isNone, isSome, none, Option, Some, some, someKey } from "./option.ts";

test(
  `
  Given a value
  When getting the value as an option
  Then a some instance object corresponding to value is returned
`,
  () => {
    fc.assert(fc.property(fc.anything(), (value: unknown) => {
      const expected: Option<unknown> = {
        optionKey: someKey,
        value,
      };

      const actual = some(value);

      assertEquals(actual, expected);
    }));
  },
);

test(
  `
  Given an option corresponding to a some instance object
  When asserting the option
  Then the instance is considered as a some instance object
`,
  () => {
    fc.assert(fc.property(fc.anything(), (value: unknown) => {
      const expected = true;

      const option: Option<unknown> = {
        optionKey: someKey,
        value,
      };

      const actual = isSome(option);

      assertEquals(actual, expected);
    }));
  },
);

test(
  `
  Given an option corresponding to a none instance object
  When asserting the option
  Then the instance is not considered as a some instance object
`,
  () => {
    const expected = false;

    const actual = isSome(none);

    assertEquals(actual, expected);
  },
);

test(
  `
  Given an option corresponding to a none instance object
  When asserting the option
  Then the instance is considered as a none instance object
`,
  () => {
    const expected = true;

    const actual = isNone(none);

    assertEquals(actual, expected);
  },
);

test(
  `
  Given an option corresponding to a some instance object
  When asserting the option
  Then the instance is not considered as a none instance object
`,
  () => {
    fc.assert(fc.property(fc.anything(), (value: unknown) => {
      const expected = false;

      const option: Some<unknown> = {
        optionKey: someKey,
        value,
      };

      const actual = isNone(option);

      assertEquals(actual, expected);
    }));
  },
);
