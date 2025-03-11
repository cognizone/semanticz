# SemantiCZ website

This website is built using [Docusaurus](https://docusaurus.io/).

## Adding info about SemantiCZ components
- create a new folder in `docs` with the name of the component
- add a `_category_.json` and `index.md` file to that folder
- add other files as needed. Get inspired in the `irigenerator` folder

## Development

## Installation

```bash
yarn
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
