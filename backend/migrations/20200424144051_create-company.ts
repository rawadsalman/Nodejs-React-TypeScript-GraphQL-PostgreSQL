import { Knex } from 'knex'

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('company', (table) => {
    table.bigIncrements('id').primary()
    table.uuid('uuid').index().notNullable()
    table.string('name').notNullable()
    table.date('memberSince').notNullable()
    table.string('taxationCountry').notNullable()
    table.string('germanVatNumber').notNullable()
    table.float('subscriptionFee').notNullable()
    table.float('commissionFee').notNullable()
    table.specificType('marketplaces', 'text ARRAY').notNullable()
    table.string('legalForm').notNullable()
    table.string('personAccountable').notNullable()
    table.string('registerNumber').notNullable()
    table.string('addressBillingFullName').notNullable()
    table.string('addressBillingLine1').notNullable()
    table.string('addressBillingLine2').notNullable()
    table.string('addressBillingPhone').notNullable()
    table.string('addressBillingCity').notNullable()
    table.string('addressBillingState').notNullable()
    table.string('addressBillingZip').notNullable()
    table.string('addressBillingCountry').notNullable()
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('company')
}
