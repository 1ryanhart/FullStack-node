import express from 'express';
import process from '../../util/process'
import validate from '../../util/validate'
import path from 'path';
import fs from 'fs';

const images = express.Router()
const pathFind = path.resolve(__dirname, '../../assets')

images.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
    const file = req.query.file as string;
    const height = req.query.height as number | string
    const width = req.query.width as number | string
    
    try {
          const validated =  validate(file, width, height);
          const inPath = path.normalize(`${pathFind}/full/${file}.jpg`)
          const outPath = path.normalize(`${pathFind}/thumb/${file}${validated.width}x${validated.height}_thumb.jpg`)

          if (!fs.existsSync(outPath)) {
            await process(validated.width, validated.height, inPath, outPath);
          }

          return res.status(200).sendFile(`${outPath}`);

    }
    catch {
          res.status(400).send('error')
    }

})

export default images

