import streamToBufferOriginal from 'stream-to-buffer'
import { ReadStream } from 'fs'


const streamToBuffer = (stream: ReadStream): Promise<Buffer> =>
  new Promise((resolve, reject) => {
    streamToBufferOriginal(stream, (error, buffer) => {
      if (error) reject(error)
      resolve(buffer)
    })
  })


export default streamToBuffer
