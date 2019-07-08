import { resolve } from 'path'
import { readFileSync } from 'fs'


const reactLoadableStatsPath = resolve(__dirname, 'reactLoadableStats.json')
const statsPath = resolve(__dirname, 'stats.json')


export const reactLoadableStats = JSON.parse(readFileSync(reactLoadableStatsPath, 'utf8'))
export const stats = JSON.parse(readFileSync(statsPath, 'utf8'))
