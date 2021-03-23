# Contributing

Welcome to the **match** repository 🖖

First of all, the team want to thank you for spending some time to help us improving the project 🙏! In this documentation, you will find all the useful information to help you contribute to the project.

## Table of contents

[Introduction](#introduction)

[TypeScript](#typescript)
- [Programming style](#programming-style)
- [Naming conventions](#naming-conventions)
- [Code conventions](#typescript-code-conventions)

## <a id="introduction"></a>🏁 Introduction

The following guidelines ensure your contributions respect the project philosophy, design, conventions and rules.

> ℹ️ If you have any question, don't hesitate to ask it on [Discord](https://discord.gg/pqkZHKWMbU)!

## <a id="typescript"></a>🏷️ TypeScript

### <a id="programming-style"></a> Programming style
- Don't use classes. The project's code is using functionnal progamming!
- Don't use interface, use type alias instead.
- Use type inference as much as possible.
- Don't use **.d.ts** file even for defining type aliases.
- Don't use anonymous types.
- Don't use **generator**.
- Don't resolve **Promise** manually, use **async**/**await** instead.
- All module imports must be at the beginning of the file.
- Always import external modules first then local ones after.
- All module exports must be at the end of the file.
- Don't use default export.
- All instructions need to be ended with semicolon (**;**).
- Use trailing comma.
- Use ternary operators instead of if/else conditions.
- Don't hesitate to use currying if you define function with multiple parameters.
- For loop, prefer recursive iteration. 
> ℹ️ If you're not familiar with this kind of programming style rules, do not hesitate to submit your PR and the team will help you to comply with the rules of the project 😉

### <a id="naming-conventions"></a> Naming convention

- Type alias name must use the **PascalCase** naming convention.
```typescript
// don't
type featurenode = {};

// good
type FeatureNode = {};
```

- All TypeScript files need to be named with the 
**camelCase** convention (eg: **parseNode.ts**).
- Variables, functions and parameters must use the **camelCase** naming convention 🐪
```typescript
// don't
const FeatureTags = ['skip', 'parser'];

// do
const featureTags = ['skip', 'parser'];
```

- If you define a constant with a **symbol**, use the **UPPER_SNAKE_CASE_CONVENTION** 🐍
```typescript
// don't
const scenarioKey = Symbol('parse');

// do
const SCENARIO_KEY = Symbol('parse');
```

- Don't suffix type alias with the Type word
```typescript
// don't
type FeatureNodeType = {
  // ...
};

// do
type FeatureNode = {
  // ...
};
```

#### <a id="typescript-code-conventions"></a> Code conventions

- To avoid scope issues, don't use the **function** keyword, use arrow function instead.
```typescript
// don't
function parse(feature: string) {
  // ...
}

// do
const parse = (feature: string) => {
  // ...
};
```

- Always use arrow function for callbacks.
```typescript
// don't
[1, 2, 3, 4].map(function(nb: number) {
  const pow = nb * nb;
  return pow;
});

// do (we can do better, see next rule)
[1, 2, 3, 4].map((nb: number) => {
  const pow = nb * nb;
  return pow;
});
```

- If you have a single instruction that returns sometings, use the short syntax.
```typescript
// don't
[1, 2, 3, 4].map((nb: number) => {
  return nb * nb;
});

// do (we can do better, see next rule)
[1, 2, 3, 4].map((nb: number) => nb * nb);
```

- If function parameters can be infer, do not specify the type.
```typescript
// don't
[1, 2, 3, 4].map((nb: number) => nb * nb);

// do (we can do better, see next rule)
[1, 2, 3, 4].map((nb) => nb * nb);
```

- If a callback function only have one parameter, remove the brackets.
```typescript
// don't
[1, 2, 3, 4].map((nb) => nb * nb);

// do (finally, this is the style we are looking for!)
[1, 2, 3, 4].map(nb => nb * nb);
```

- Always use const for immutability (never use let without a really good reason)
```typescript
// don't
let nodeType = 'feature';
nodeType = 'scenario';

// better
const nodeType = 'feature';
```

- Always type object, array, map and set as readonly structure.
```typescript
// don't
const nodes: Array<Node> = [/*...*/];

// do
const nodes: ReadonlyArray<Node> = [/*...*/];
```
> For this kind of immutable structure, the project is using a library. 

- Try to not use the **any** type, we are not doing JavaScript, PHP or Ruby here 😄. If you do not know the type, use **unknown** type instead.

```typescript
// don't
const isNode = (node: any) => {
  // ...
};

// do
const isNode = (node: unknown) => {
  // ...
};
```

- Don't use enumerations. TypeScript will emulate this feature because it's not part of the ECMAScript specification. Instead you can use a type alias with some union (it will not generate anything during compilation).
```typescript
// don't
enum Node {
  Feature,
  Scenario,
  ScenarioOutline
}

// better
type Node = 'Feature' | 'Scenario' | 'ScenarioOutline';
```

- For object typing, use type aliases instead of interfaces as the project is not using any classes
```typescript
// don't
interface Node {
  type: string;
}

// do
type Node = {
  type: string;
};
```

- Avoid plain object declaration without typing.
```typescript
// don't
const node = {
  type: 'feature',
};

// do
type Node = {
  type: string;
};

const user: Node = {
  type: 'feature',
};
```

- For function typing, use type aliases.
```typescript
// do
type Parse = (feature: string): Feature;
```

- Don't use **Function** as a type
```typescript
// don't
const parse: Function = (feature: string) {
  // ...
};
```
