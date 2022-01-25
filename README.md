```shell
npm i -D prettier eslint prop-types styled-components animated-number-react
npx mrm@2 lint-staged
```

`package.json`:

```json
  "homepage": "https://KostiantynO.github.io/goit-react-hw-04-hooks-feedback"
  "lint-staged": {
    "*.{js,jsx}": "eslint --cache --fix",
    "*.{js,jsx,css,sass,md}": "prettier --write"
  }
```

`.gitignore`

```text
.eslintcache
```
