import path from 'path'
import { processFiles } from './generate-icons'

const assetsDir = path.join(__dirname, '..', 'lib', 'assets')
const distDir = path.join(__dirname, '..', 'dist')

processFiles(assetsDir, distDir)
