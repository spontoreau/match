[![GitHub license](https://img.shields.io/github/license/behaviorland/match?style=flat-square)](LICENSE)
[![Discord](https://img.shields.io/discord/820714341409095710?style=flat-square)](https://discord.gg/pqkZHKWMbU)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.dev)

# match

A simple pattern matching library for people who love currying!

## Getting started

**match** is super easy to use:

```typescript
import { match } from "https://deno.land/x/match/mod.ts";

const value = "Deno";

const result = match(value)(
  [(v) => v === "Deno", () => `Deno found!`],
  [(v) => v === "Node", () => `We are not looking for you Node, sorry!`],
)();

console.log(result);
```

You can found more information in the
[documentation](https://github.com/behaviorland/match/wiki/Documentation)!

## Code of conduct

This project has adopted the [code of conduct](CODE_OF_CONDUCT.md) defined by
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
    <td align="center"><a href="http://sylvain.pontoreau.com"><img src="https://avatars.githubusercontent.com/u/3357643?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sylvain PONTOREAU</b></sub></a><br /><a href="https://github.com/the-hipster-committers/denohavior/commits?author=spontoreau" title="Documentation">📖</a> <a href="https://github.com/the-hipster-committers/denohavior/commits?author=spontoreau" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Licence

[MIT](LICENSE)
