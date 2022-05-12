# Image Processing API

## Overview

This is a project submission in the Udacity Full Stack Developer for Shell Nanodegree Program. The program is an image processing API which resizes images to a thumbnail size, or fetchs a thumbnail image if the resizing has already been performed.

## Installing Dependencies from package.json

```bash
$ npm install
```

## package.json scripts

1. **Generating memes from the command line**

```bash
$ node src/.
```

or

```bash
$ export FLASK_APP=hello
$ flask run
```

Open http://127.0.0.1:5000/ in a web browser to access the app.

5. **Generating memes from the command line** - The app can be run from the command line, without the need to set up a Flask server. Navigate to the root directory (src) and run:

```bash
$ python meme.py --path {path} --body {body} --author {author}
```

Path, body and author are all optional arguements. If none are passed, then defaults are randomly selected.

- Path is the file path to the image for the meme.
- Body is the body of the quote.
- Author is the author of the quote.

## Modules

### MemeEngine

The MemeEngine module contains only the MemeEngine class with is instantiated when the app is ran (either in the command line or via Flask server). This class has the _makememe_ method which takes 3 parameters (image path, body, author) and returns to path to a generated meme

### QuoteEngine

The QuoteEngine module contains the following:

- **IngestorInterface** - An abstract base class for other specific child Ingestors to inherit from. Defines the _can_ingest_ and _parse_ methods
- **Ingestors** - Childer IngestorInterface classes to parse .txt, .pdf, .docx or .csv files and to generate Quote objects from the parsed text
- **Ingestor** - Realises the IngestorInterface abstract base class. Used as a
  selector to parse a given file to the correct Ingestor (pdf, txt, docx, csv).
