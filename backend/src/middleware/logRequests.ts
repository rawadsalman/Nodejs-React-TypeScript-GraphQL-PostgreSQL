import { Request, Response, NextFunction } from 'express'
import { getNamespace } from 'cls-hooked'
import pino from 'pino'

export default function logRequests(logger: pino.Logger) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const namespace = getNamespace('logger')

    logger.trace({ requestId: namespace.get('requestId'), req }, 'Incoming request')

    next()
  }
}
