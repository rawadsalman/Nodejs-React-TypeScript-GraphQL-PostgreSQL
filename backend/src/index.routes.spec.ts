import request from 'supertest'

let app

describe('Index Route', () => {
  beforeAll(() => {
    app = require('./config/express').default
  })

  it('/health should return 200', async (done) => {
    await expect(request(app).get('/health')).resolves.toHaveProperty('status', 200)
    done()
  })

  it('/version should return a json based on ENV files', async (done) => {
    const response = await request(app).get('/version')

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('version')
    done()
  })
})
