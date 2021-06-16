import { Namespace } from 'cls-hooked'
import { Request, Response, NextFunction } from 'express'

export default function clsRequestId(namespace: Namespace, generateId: () => string) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const requestId = req.get('X-Request-Id') || generateId()
    res.set('X-Request-Id', requestId)

    namespace.run(() => {
      namespace.set('requestId', requestId)

      next()
    })
  }
}
