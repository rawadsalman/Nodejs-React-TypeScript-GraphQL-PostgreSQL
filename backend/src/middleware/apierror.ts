import { Request, Response, NextFunction } from 'express'
import APIError from './APIError.class'
import config from '../config/env'
import logger from '../logger'

// Necessary because of function overload! We need to specify next
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: APIError, req: Request, res: Response, next: NextFunction): void => {
  const apiError = new APIError(err.message, err.status, err.stack)

  logger.error(apiError)

  if (res.headersSent) {
    return next(apiError)
  }

  res
    .status(apiError.status)
    .json({
      status: apiError.status,
      message: apiError.message,
      ...(config.env === 'development' && { stack: apiError.stack }),
    })
    .end()
}
