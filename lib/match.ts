import { none, Option, some } from "./option.ts";

type Condition<TValue> = (value: TValue) => boolean;
type Execution<TValue, TResult> = (value: TValue) => TResult;
type Pattern<TValue, TResult> = [Condition<TValue>, Execution<TValue, TResult>];

type DefaultPattern<TValue, TResult> = (
  toExecute?: Execution<TValue, TResult>,
) => Option<TResult>;
type PatternsToExecute<TValue, TResult> = (
  ...patterns: ReadonlyArray<Pattern<TValue, TResult>>
) => DefaultPattern<TValue, TResult>;
type Match = <TValue, TResult>(
  value: TValue,
) => PatternsToExecute<TValue, TResult>;

const match: Match = (value) =>
  (...patterns) =>
    (toExecute) => {
      const defaultReturn = !toExecute ? none : some(toExecute(value));
      const pattern = patterns.find((p) => p[0](value));

      return !pattern ? defaultReturn : some(pattern[1](value));
    };

export { match };
