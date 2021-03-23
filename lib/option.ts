// Copyright 2021 the match library authors (see: https://github.com/behaviorland/match).
// All rights reserved.
// MIT license.

type Some<TValue> = {
  type: "some";
  value: TValue;
};

type None = {
  type: "none";
};

type Option<TValue> = Some<TValue> | None;

const some = <TValue>(value: TValue): Option<TValue> => {
  return {
    type: "some",
    value,
  };
};

const none = <TValue>(): Option<TValue> => {
  return {
    type: "none",
  };
};

const isSome = <TValue>(option: Option<TValue>): option is Some<TValue> => {
  return option.type === "some";
};

const isNone = <TValue>(option: Option<TValue>): option is Some<TValue> => {
  return option.type === "none";
};

export type { None, Option, Some };
export { isNone, isSome, none, some };
