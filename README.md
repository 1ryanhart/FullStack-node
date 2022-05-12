# Image Processing API

## Overview

This is a project submission in the Udacity Full Stack Developer for Shell Nanodegree Program. The program is an image processing API which resizes images to a thumbnail size, or fetchs a thumbnail image if the resizing has already been performed.

## Installing Dependencies from package.json

```bash
$ npm install
```

## Running the server

1. **Compiling the TypeScript to JavaScript**

```bash
$ npm run build
```

2. **Running the server. Note: the build must be performed first**

```bash
$ node dist/.
```

## Testing with Jasmine

Tests have been written using Jasmine. To execute the tests, run:

```bash
$ npm run test
```

## API Endpoints

### GET /api/images

The following URL parameters need to be supplied with the request

- **Image name** -eg 'fjord'. This is the name of the file (without the .jpg extension) within the assets/full directory to process
- **Width** - the required width of the output file. If no width is specified, the default is 200px
- **Height** - the required height of the output file. If no height is specified, the default is 200px
