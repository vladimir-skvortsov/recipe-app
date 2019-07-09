# Recipe App

Simple recipe app


## Requirements

What things you need to install the software and how to install them.

* [NodeJS](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)
* [Docker](https://www.docker.com/)
* [Docker Compose](https://github.com/docker/compose)


## Installation

```sh
$ yarn
```


## Available Scripts

In the project directory, you can run:

* **`yarn build:dev`** - Runs the app in the development mode.
* **`yarn build:prod`** - Build the app for production.
* **`yarn docker:i`** - Show all [Docker](https://www.docker.com/) images.
* **`yarn docker:ps`** - Shows all [Docker](https://www.docker.com/) containers.
* **`yarn docker:rc`** - Remove all [Docker](https://www.docker.com/) containers.
* **`yarn docker:ri`** - Remove all [Docker](https://www.docker.com/) images.
* **`yarn docker:up`** - Builds the app with [Docker](https://www.docker.com/).
* **`yarn start:dev`** - Runs server in the development mode.
* **`yarn start:prod`** - Runs server in the production mode.
* **`yarn test:approve`** - Approves visual changes.
* **`yarn test:update`** - Updates snapshots and run tests.
* **`yarn test:visual`** - Runs visual regression tests.
* **`yarn storybook`** - Runs [Storybook](https://storybook.js.org/).
* **`yarn test`** - Runs tests.


## Built With

* [Anime](https://github.com/juliangarnier/anime/) - JavaScript animation engine.
* [Ant Design](https://github.com/ant-design/ant-design) - An enterprise-class UI design language and React implementation.
* [Apollo Server](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express) - Production-ready Node.js GraphQL server for Express.
* [Apollo](https://github.com/apollographql/apollo-client) - A simple yet functional GraphQL client.
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for NodeJS.
* [Mongoose](https://github.com/Automattic/mongoose) - MongoDB object modeling designed to work in an asynchronous environment.
* [React Router](https://github.com/ReactTraining/react-router) - DOM bindings for React Router.
* [React](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
* [Styled Components](https://github.com/styled-components/styled-components) - Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.


## Project structure

A quick look at the top-level files and directories you'll see in the project.

    recipe-app
    ├── .circleci
    ├── .storybook
    ├── build
    ├── cache
    ├── coverage
    ├── node_modules
    ├── scripts
    ├── source
    │   ├── client
    │   │   ├── assets
    │   │   ├── components
    │   │   ├── data
    │   │   ├── queries
    │   │   ├── scenes
    │   │   ├── utils
    │   │   └── client.tsx
    │   ├── public
    │   │   ├── favicon.png
    │   │   ├── humans.txt
    │   │   ├── robots.txt
    │   │   └── sitemap.xml
    │   ├── server
    │   │   ├── assets
    │   │   ├── data
    │   │   ├── resolvers
    │   │   ├── utils
    │   │   └── server.tsx
    │   └── shared
    │       ├── components
    │       ├── data
    │       ├── reducers
    │       └── utils
    ├── .dockerignore
    ├── .editorconfig
    ├── .env
    ├── .gitignore
    ├── .huskyrc
    ├── docker-compose.yml
    ├── Dockerfile
    ├── jest.config.js
    ├── LICENSE
    ├── package.json
    ├── postcss.config.js
    ├── prettier.config.js
    ├── prisma.yml
    ├── README.md
    ├── setupTests.js
    ├── template.html
    ├── tsconfig.json
    ├── tslint.json
    ├── typings.d.ts
    ├── webpack.config.js
    └── yarn.lock

* **`/.circleci`** - Directory containing [CirlceCI](https://circleci.com/) configs.
* **`/.storybook`** - Directory containing [Storybook](https://storybook.js.org/) configs.
* **`/build`** - Directory containing build outputs.
* **`/cache`** - Directory containing cache for webpack.
* **`/coverage`** - Directory containing test coverage results.
* **`/node_modules`** - Directory containing all of the modules of code that your project depends on (npm packages) are automatically installed.
* **`/scripts`** - Bash scripts for [Docker](https://www.docker.com/).
* **`/source`** - This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `source` is a convention for “source code”.
* **`/source/client`** - Directory containing all the files associated with the client part of the application.
* **`/source/client/scenes`** - Directory containing application scenes (pages).
* **`/source/public`** - Directory containing all of the static files of the application.
* **`/source/server`** - Directory containing all the files associated with the server part of the application.
* **`/source/server/resolvers`** - Directory containing resolvers for [Apollo Server](https://github.com/apollographql/apollo-server).
* **`/source/shared`** - Directory containing all the files associated with both the client and server part of the application.
<br>
<br>
* **`**/assets`** - Directory containing different assets like images, sounds, documents, etc.
* **`**/components`** - Directory containing react components.
* **`**/data`** - Directory containing different static data.
* **`**/utils`** - Directory containing function and other helpers.
<br>
<br>
* **`.dockerignore`** - This helps to avoid unnecessarily sending large or sensitive files and directories to the daemon and potentially adding them to images using ADD or COPY.
* **`.editorconfig`** - [EditorConfig](https://editorconfig.org/) helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.
* **`.env`** - This file container all development environment variables.
* **`antDesignVariables.less`** - Theme variables for [Ant Design](https://ant.design/).
* **`.gitignore`** - This file tells git which files it should not track / not maintain a version history for.
* **`.huskyrc`** - Configuration file for [Husky](https://github.com/typicode/husky).
* **`docker-compose.development.yml`** - This file specifies the services that the application needs for development.
* **`docker-compose.production.yml`** - This file specifies the services that the application needs for productions.
* **`Dockerfile`** - This file contains instructions for [Docker](https://www.docker.com/).
* **`jest.config.js`** - Configuration file for [Jest](https://jestjs.io/).
* **`LICENSE`** - This file contains license.
* **`package.json`** - A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
* **`postcss.config.js`** - Configuration file for [PostCSS](https://postcss.org/).
* **`prettier.config.js`** - Configuration file for [Prettier](https://prettier.io/).
* **`prisma.yml`** - Configuration file for [Prisma](https://www.prisma.io/).
* **`README.md`** - A text file containing useful reference information about the project.
* **`setupTests.js`** - This files setups test global environment.
* **`template.html`** - HTML template for [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin).
* **`tsconfig.json`** - Configuration file for [Typescript](https://www.typescriptlang.org/).
* **`tslint.json`** - Configuration file for [TSLint](https://palantir.github.io/tslint/).
* **`typings.d.ts`** - This file contains custom type declarations.
* **`webpack.config.js`** - Configuration file for [Webpack](https://webpack.js.org/).
* **`yarn.lock`** - This file specifies version of packages for yarn.


## Environment variables

* **`NODE_ENV`** - This variable specifies the environment in which an application is running.
* **`PORT`** - This variable specifies the listening port of the server.
* **`PRISMA_ENDPOINT`** - [Prisma](https://www.prisma.io/) endpoint.
* **`PRISMA_SECRET`** - [Prisma](https://www.prisma.io/) secret.


## Versioning

The project uses [SemVer](http://semver.org/) for versioning.


## Authors

* **Vladimir Skvortsov** <[public@vladimirskvortsov.com](mailto:public@vladimirskvortsov.com)> ([https://vladimirskvortsov.com](https://vladimirskvortsov.com))


## License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.
