import KnexLib from 'knex'
import knex from '../postgres'

export default abstract class AbstractRepository {
  protected knex: KnexLib | KnexLib.Transaction
  public static tableName = ''

  constructor(trx = knex) {
    this.knex = trx
  }
}
