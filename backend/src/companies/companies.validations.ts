import Joi from '@hapi/joi'
import countryCodes from './countryCodes.json'

const countryCodeValidator = Joi.string().valid(...countryCodes)

export const createCompanyValidation = Joi.object({
  name: Joi.string().required(),
  memberSince: Joi.string().required(),
  taxationCountry: countryCodeValidator.required(),
  germanVatNumber: Joi.string().required(),
  subscriptionFee: Joi.number().required(),
  commissionFee: Joi.number().required(),
  marketplaces: Joi.array().items(Joi.string()),
  addressBillingFullName: Joi.string().required(),
  addressBillingLine1: Joi.string().required(),
  addressBillingLine2: Joi.string().allow(null).allow(''),
  addressBillingPhone: Joi.string().required(),
  addressBillingCity: Joi.string().required(),
  addressBillingState: Joi.string().required(),
  addressBillingZip: Joi.string().required(),
  addressBillingCountry: countryCodeValidator.required(),
  registerNumber: Joi.string().allow(null).allow(''),
  legalForm: Joi.string().required(),
  personAccountable: Joi.string().required(),
})
