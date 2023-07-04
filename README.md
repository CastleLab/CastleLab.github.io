# Homepage of CASTLE Research Group

## Development

### Requirement

`node.js >= 16`

### Install dependencies

```
yarn
```

### Development build

```
yarn start
```

## Update and Deployment

Any push to `main` branch will trigger a `deployment` GitHub Action to deploy to server.
However, `main` branch is protected and cannot be directed pushed to.

Should CASTLE members need to update the homepage, a Pull Request (PR) should be created.
Each PR needs to go through several checks (GitHub Actions).
Then before the merge, a preview version of the homepage will be deployed to GitHub Pages, accessible via https://castlelab.github.io.
Admin will merge the PR if everything looks good.
