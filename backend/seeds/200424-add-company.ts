import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<any> {
  await knex('company')
    .insert({
      name: 'SPACEGOATS GmbH',
      uuid: '00000000-0000-0000-0000-000000000000',
      memberSince: '2021-04-23',
      taxationCountry: 'DE',
      germanVatNumber: '1233323',
      subscriptionFee: 129,
      commissionFee: 0.5,
      marketplaces: ['DE', 'UK', 'IT', 'FR', 'ES', 'NL'],
      addressBillingFullName: 'Max Musterperson',
      addressBillingLine1: 'SPACEGOATS GmbH',
      addressBillingLine2: 'Alexanderstraße 23',
      addressBillingPhone: '0711 123456',
      addressBillingCity: 'Stuttgart',
      addressBillingState: 'Baden-Württemberg',
      addressBillingZip: '70184',
      addressBillingCountry: 'DE',
      registerNumber: 'DE1122111',
      legalForm: 'GmbH',
      personAccountable: 'Max Musterperson',
    })

  return
}
