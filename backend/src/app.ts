/* istanbul ignore file */
import env from './config/env'
import app from './config/express'
import logger from './logger'
import 'regenerator-runtime/runtime'
import knex from './database/postgres'



const server = app.listen(env.port, () => {
  logger.info(`Server listening on port ${env.port}…`)
})

process.on('SIGTERM', shutdown('SIGTERM')).on('SIGINT', shutdown('SIGINT')).on('uncaughtException', shutdown('uncaughtException'))

function shutdown(signal: string) {
  return (err: any) => {
    logger.info(`${signal} signal received. Going to close the server...`)

    server.close(() => {
      logger.info('Http server closed successfully.')
    })
    knex.destroy()

    if (err) {
      logger.error(err.stack || err)
    }
    setTimeout(() => {
      logger.info('...waited 5s, exiting.')
      process.exit(err ? 1 : 0)
    }, 5000).unref()
  }
}

export default server
