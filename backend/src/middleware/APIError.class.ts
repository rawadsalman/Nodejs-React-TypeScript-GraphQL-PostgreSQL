import httpStatus from 'http-status'

class APIError extends Error {
  status: number
  stack?: string

  /**
   * @param  {String}  message:  string        [description]
   * @param  {Number}  status:   number        HTTP Status Code use httpStatus
   * @param  {String}  stack:    string        Stacktrace
   */
  constructor(message: string, status: number = httpStatus.INTERNAL_SERVER_ERROR, stack?: string) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    this.status = status
    this.stack = stack

    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this)
    }
  }
}

export default APIError
