import express from 'express';
import process from '../../util/process'
import path from 'path';

const images = express.Router()
const pathFind = path.resolve(__dirname, '../../assets')

images.get('/', (req, res) => {
    let file = req.query.file;
    let height = req.query.height
    let width = req.query.width
    
    if (height == null) {
        height = '200'
    }
    if (width == null) {
        width = '200'
    }

    const processImage = async () => {
        let fileout = await process(file, width, height)
        res.sendFile(`${pathFind}/${fileout}`)
    }
    
    try {
          processImage()
    }
    catch {
          res.status(400).send('error')
    }


})

export default images

