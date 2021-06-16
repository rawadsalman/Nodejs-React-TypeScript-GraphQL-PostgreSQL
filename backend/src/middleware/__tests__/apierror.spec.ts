import APIError from './../APIError.class'
import request from 'supertest'
import apierrorMiddleware from './../apierror'

jest.mock('../../logger')

let app
describe('APIError', () => {
  beforeAll(() => {
    app = require('../../config/express').default
    app.get('/test-route', (req, res, next) => {
      throw new Error('🔥')
    })

    app.use(apierrorMiddleware)
  })

  it('should default with an internal server error ', () => {
    const error = new APIError('test')
    expect(error.message).toBe('test')
    expect(error.status).toBe(500)
  })
})

describe('APIError Middleware', () => {
  it('should run', async (done) => {
    const response = await request(app).get('/test-route')

    expect(response.status).toBe(500)
    expect(response.body.message).toBe('🔥')
    done()
  })
})
