import { promises as fsPromises } from 'fs';

const sharp = require('sharp');

const process = (file, width, height) => {
    sharp(`src/assets/full/${file}.jpg`)
    .resize(parseInt(width), parseInt(height))
    .jpeg({ mozjpeg: true })
    .toBuffer()
    .then( data => { 
        fsPromises.writeFile(`src/assets/thumb/${file}${width}x${height}_thumb.jpg`, data)
     })
    return `thumb/${file}${width}x${height}_thumb.jpg`
}

export default process