# Pairwise Example HTTP API

<br />

A Express server which exposes an example HTTP API for the Pairwise Async Challenges.

## Getting Started

Have [NodeJS](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/lang/en/docs/) installed and run the following:

```sh
# Install dependencies
$ yarn install

# Run the server
$ yarn start
```

Or, run the project using [Docker](https://www.docker.com/):

```sh
# Build the Docker image
$ docker build -t pairwise-example-http-api .

# Run the server using Docker
$ docker run -d -t pairwise-example-http-api
```

The project also has some linting rules and tests:

```sh
# Apply formatting rules
$ yarn format

# Run project unit tests
$ yarn test:unit

# Run project linting and tests
$ yarn test
```
