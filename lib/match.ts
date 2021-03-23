// Copyright 2021 the match library authors (see: https://github.com/behaviorland/match).
// All rights reserved.
// MIT license.

import { none, Option, some } from "./option.ts";

type Condition<TValue> = (value: TValue) => boolean;

type Execution<TValue, TResult> = (value: TValue) => TResult;

type Pattern<TValue, TResult> = readonly [
  condition: Condition<TValue>,
  execution: Execution<TValue, TResult>,
];

type Match = <TValue, TResult>(
  value: TValue,
) => (
  ...patterns: ReadonlyArray<Pattern<TValue, TResult>>
) => (
  wildcard?: Execution<TValue, TResult>,
) => Option<TResult>;

const match: Match = (value) =>
  (...patterns) =>
    (wildcard) => {
      const [, execution] = patterns.find(
        ([condition]) => condition(value),
      ) ?? [, wildcard];

      return execution ? some(execution(value)) : none;
    };

export { match };
