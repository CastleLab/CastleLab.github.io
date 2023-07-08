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

## Update

The `main` branch is protected and cannot be directed pushed to (admin has bypassing privileges, however).
Should CASTLE members need to update the homepage, a Pull Request (PR) should be created.
Each PR needs to go through several checks (GitHub Actions), e.g., webpage compilation.
Admin will merge the PR if everything looks good.

## Deployment

Any push to `main` branch will trigger a `preview` GitHub Action to deploy to GitHub Page: https://castlelab.github.io.

Deployment to server can only be triggered manually via GitHub Action [`deploy`](https://github.com/CastleLab/CastleLab.github.io/actions/workflows/deploy.yml).


