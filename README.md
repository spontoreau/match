[![GitHub license](https://img.shields.io/github/license/behaviorland/match)](LICENSE)
[![CI](https://img.shields.io/github/workflow/status/behaviorland/match/match-ci)](https://github.com/behaviorland/match/actions/workflows/main.yaml)
[![Codecov](https://img.shields.io/codecov/c/github/behaviorland/match)](https://app.codecov.io/gh/behaviorland/match)
[![DeepScan grade](https://deepscan.io/api/teams/13405/projects/16407/branches/351150/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=13405&pid=16407&bid=351150)
[![Discord](https://img.shields.io/discord/820714341409095710)](https://discord.gg/pqkZHKWMbU)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg)](https://gitmoji.dev)

# match

A simple pattern matching library for people who love currying!

## Getting started

**match** is super easy to use:

```typescript
import { isSome, match } from "https://deno.land/x/match/mod.ts";

const value = "Deno";

const option = match<string, string>(value)(
  [(v) => v === "Deno", () => `Deno found!`],
  [(v) => v === "Node", () => `We are not looking for you Node, sorry!`],
)();

const result = isSome(option) ? option.value : "Not found";

console.log(result);
```

You can found more information in the
[documentation](https://github.com/behaviorland/match/wiki/Documentation)!

## Code of Conduct

This project has adopted the [code of conduct](https://github.com/behaviorland/match/wiki/Code-of-conduct) defined by
the Contributor Covenant.

## Contributing

Before you contribute, please take a few minutes to read the
[contribution guidelines](https://github.com/behaviorland/match/wiki/Contribution-guidelines).

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://sylvain.pontoreau.com"><img src="https://avatars.githubusercontent.com/u/3357643?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sylvain PONTOREAU</b></sub></a><br /><a href="https://github.com/behaviorland/match/commits?author=spontoreau" title="Documentation">📖</a> <a href="https://github.com/behaviorland/match/commits?author=spontoreau" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Licence

[MIT](LICENSE)
