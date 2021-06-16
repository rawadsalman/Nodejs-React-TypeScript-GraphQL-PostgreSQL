/* istanbul ignore file */
import pino from 'pino'
import config from './config/env'
import { multistream } from 'pino-multi-stream'
import { Writable } from 'stream'

let stream = null
const isProd = config.env === 'production'

const logStream = new Writable({
  objectMode: true,
  write: (data, _, done): void => {
    console.log(data)
    done()
  },
})

if (isProd) {
  stream = [
    { level: config.logLevel, stream: process.stdout },
    { level: 'error', stream: process.stderr },
  ]
} else {
  stream = { level: 'trace', stream: logStream }
}

const prettyPrint = isProd
  ? false
  : {
    colorize: true,
    ignore: 'hostname,pid,time',
  }

const logger = pino(
  {
    prettyPrint,
    level: config.logLevel,
  },
  multistream(stream)
)

export default logger
