import { buffer } from 'imagemin'
import pngquant from 'imagemin-pngquant'
import jpegtran from 'imagemin-jpegtran'
import svgo from 'imagemin-svgo'


const minifyImage = (data: Buffer) => buffer(data, {
  plugins: [
    pngquant({ speed: 1, quality: [0.3, 0.5] }),
    jpegtran({ progressive: true }),
    svgo({ plugins: [{ removeViewBox: false }] }),
  ],
})


export default minifyImage
