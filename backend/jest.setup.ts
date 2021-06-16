import knex from './src/database/postgres'

// Mitigates the sometimes failing (b/c long running ~8 sec) companies.create.spec.ts test
jest.setTimeout(15000)

beforeAll(() => {})
afterAll(async (done) => {
  await knex.destroy()
  done()
})
