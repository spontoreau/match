import { assertEquals, fc, test } from "../devDependencies.ts";
import { isNone, isSome, none, Option, some } from "./option.ts";

test(
  `
  Given a value
  When getting the value as an option
  Then a some instance object corresponding to value is returned
`,
  () => {
    fc.assert(fc.property(fc.anything(), (value: unknown) => {
      // Given
      const expected: Option<unknown> = {
        type: "some",
        value,
      };

      // When
      const actual = some(value);

      // Then
      assertEquals(actual, expected);
    }));
  },
);

test(
  `
  When getting none as an option
  Then a none instance object is returned
`,
  () => {
    fc.assert(fc.property(fc.anything(), (value: unknown) => {
      // Given
      const expected: Option<unknown> = {
        type: "none",
      };

      // When
      const actual = none();

      // Then
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
      // Given
      const expected = true;
      const option = some(value);

      // When
      const actual = isSome(option);

      // Then
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
    // Given
    const expected = false;
    const option = none();

    // When
    const actual = isSome(option);

    // Then
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
    // Given
    const expected = true;
    const option = none();

    // When
    const actual = isNone(option);

    // Then
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
      // Given
      const expected = false;
      const option = some(value);

      // When
      const actual = isNone(option);

      // Then
      assertEquals(actual, expected);
    }));
  },
);
