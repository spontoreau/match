// Copyright 2021 the match library authors (see: https://github.com/behaviorland/match).
// All rights reserved.
// MIT license.

import { none, Option, some } from "./option.ts";

type Condition<TValue> = (value: TValue) => boolean;

type Execution<TValue, TResult> = (value: TValue) => TResult;

type Pattern<TValue, TResult> = [
  condition: Condition<TValue>,
  execution: Execution<TValue, TResult>,
];

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
    (wildcard) => {
      const defaultExecute = () => !wildcard ? none : some(wildcard(value));
      const [, execution] = patterns.find(([condition]) => condition(value)) ?? [];

      return !execution ? defaultExecute() : some(execution(value));
    };

export { match };
