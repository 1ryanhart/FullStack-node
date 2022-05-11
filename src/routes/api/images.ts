import express from 'express';
import process from '../../util/process'

const images = express.Router()

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
        const img = await process(file, width, height)
        res.status(200).send(`api link working, with the following params:\n\nfile:${file}\nheight:${height}\nwidth:${width} `)
    }
    
    try {
          processImage()
    }
    catch {
          res.status(400).send('error')
    }


})

export default images

