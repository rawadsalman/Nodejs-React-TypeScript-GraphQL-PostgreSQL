/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BaseCompanyViewModel {
  name: string;
  memberSince: string;
  taxationCountry: string;
  germanVatNumber: string;
  subscriptionFee: number;
  commissionFee: number;
  marketplaces: string[];
  addressBillingFullName: string;
  addressBillingLine1: string;
  addressBillingLine2: string | null;
  addressBillingPhone: string;
  addressBillingCity: string;
  addressBillingState: string;
  addressBillingZip: string;
  addressBillingCountry: string;
  registerNumber: string | null;
  legalForm: string;
  personAccountable: string;
}

export type ShowCompanyViewModel = BaseCompanyViewModel & { uuid: string; created_at: string; updated_at: string };

export type CreateCompanyViewModel = BaseCompanyViewModel;
