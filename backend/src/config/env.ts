import Joi from '@hapi/joi'
import packageJson from '../../package.json'
// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv-flow').config({
  silent: true,
})

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().default('development'),
  PORT: Joi.number().default(3001),
  LOG_LEVEL: Joi.string().default('debug'),
  DOMAIN: Joi.string().default('localhost'),
  DB_HOST: Joi.string(),
})
  .unknown()
  .required()

const { error, value: envVars } = envVarsSchema.validate(process.env)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  domain: envVars.DOMAIN,
  version: packageJson.version,
  dbHost: envVars.DB_HOST,
  logLevel: envVars.LOG_LEVEL,
}

export default config
