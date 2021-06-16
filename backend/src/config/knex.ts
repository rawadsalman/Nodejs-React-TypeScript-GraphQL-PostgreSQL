import config from './env'
const isProd = config.env === 'production'

const conf = {
  client: 'pg',
  connection: config.dbHost,
  ssl: isProd ? true : false,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    extension: 'ts',
  },
}

export default conf
