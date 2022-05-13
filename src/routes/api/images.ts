import express from 'express';
import process from '../../util/process';
import validate from '../../util/validate';
import path from 'path';
import fs from 'fs';

const images = express.Router();
const pathFind = path.resolve(__dirname, '../../../assets');

images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const file = req.query.file as string;
    let height = req.query.height as number | string;
    let width = req.query.width as number | string;

    try {
      const inPath = path.normalize(`${pathFind}/full/${file}.jpg`);
      const val = validate(width, height);
        console.log(val.width)
      if (
        isNaN(val.width) ||
        val.width <= 0 ||
        isNaN(val.height) ||
        val.height <= 0
      ) {
        res.status(400).send('error processing width or height parameters');
      }

      if (!fs.existsSync(`${pathFind}/thumb/`)) {
        fs.mkdirSync(`${pathFind}/thumb/`);
      }

      const outPath = path.normalize(
        `${pathFind}/thumb/${file}${val.width}x${val.height}_thumb.jpg`
      );

      if (!fs.existsSync(inPath)) {
        res.status(404).send(`File not found at directory ${inPath}`);
      }

      if (!fs.existsSync(outPath)) {
        try {
          await process(val.width, val.height, inPath, outPath);
        } catch {
          res.status(400).send('error processing image');
        }
      }

      res.status(200).sendFile(`${outPath}`);
    } catch {
      res
        .status(400)
        .send(
          'error processing inpur height and width. Ensure positive integers are passed'
        );
    }
  }
);

export default images;
