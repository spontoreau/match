// Copyright 2021 the match library authors (see: https://github.com/behaviorland/match).
// All rights reserved.
// MIT license.

type Some<TValue> = None & {
  value: TValue;
};

type None = {
  optionKey: symbol;
};

type Option<TValue> = Some<TValue> | None;

const someKey = Symbol("Some");

const some = <TValue>(value: TValue): Option<TValue> => {
  return {
    optionKey: someKey,
    value,
  };
};

const noneKey = Symbol("None");

const none: None = {
  optionKey: noneKey,
};

const isSome = <TValue>(option: Option<TValue>): option is Some<TValue> => {
  return option.optionKey === someKey;
};

const isNone = <TValue>(option: Option<TValue>): option is Some<TValue> => {
  return option.optionKey === noneKey;
};

export type { None, Option, Some };
export { isNone, isSome, none, noneKey, some, someKey };
