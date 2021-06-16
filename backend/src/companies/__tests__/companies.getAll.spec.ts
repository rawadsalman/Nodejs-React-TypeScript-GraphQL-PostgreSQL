import request from 'supertest'
import knex from '../../database/postgres'
import companyPayload from './mockdata/companyPayload.json'
import CompanyRepository from '../../database/repository/company/company.repository'

jest.mock('../../logger')


let app
describe('Company Routes GET /companies', () => {
  beforeAll(async () => {
    app = require('../../config/express').default
    await knex('company').del()
  })

  afterAll(async () => {
    await knex('company').del()
  })

  it('should return an array of companies', async (done) => {
    await knex('company').insert({ ...companyPayload, uuid: 'd75ff455-4e35-4f1a-b4da-18686d918d99' })
    const response = await request(app).get('/companies')
    const companies = response.body
    expect(companies).toHaveLength(1)
    expect(companies[0]).not.toHaveProperty('id')
    done()
  })

  it('should throw an error when knex.select fails', async (done) => {
    const knexSpy = jest.spyOn(CompanyRepository.prototype, 'getCompanies').mockImplementation(() => Promise.reject('noooope'))

    const response = await request(app).get('/companies')
    expect(response.body.status).toBe(500)
    knexSpy.mockRestore()
    done()
  })
})