## Library package

This project is a template of a Node library


## Installation

```bash
$ npm install
```

## Running unit test

```bash
$ npm run test
```

## Configuration
Steps below via Github interface.
1. Create a classic token with the permission "write:packages"
2. Create a "repository secrets" with the key PUBLISH_GITHUB_TOKEN and the value is the created above

## Publish the package

To publish a new version of the library, first, increment the version number in the package.json to after create the tag and release. The script release-package.yml is responsible to publish the library in all new releases.


## Technologies

NodeJS, Typescript and Jest.

### 3rd party libraries

- [jest](https://jestjs.io/docs/getting-started) - Unit test tool.