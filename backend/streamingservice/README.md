## Description


## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Run in container

```bash
# build the image
$ docker build -t netflix-clone/streamingservice .

# run the container
$ docker run -p 3000:3000 netflix-clone/streamingservice
```