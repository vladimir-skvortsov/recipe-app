import { readdirSync } from 'fs'
import { resolve } from 'path'


let data: string | undefined


try {
  data = readdirSync(resolve(__dirname, 'public'))
    .find(fileName => fileName.indexOf('manifest') === 0)
} catch (error) {}



export default data