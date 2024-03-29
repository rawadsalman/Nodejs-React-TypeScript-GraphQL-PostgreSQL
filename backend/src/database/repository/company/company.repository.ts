import { ShowCompanyViewModel } from '../../../generated/api'
import AbstractRepository from '../abstractRepository'
import companyColoums from './company.columns'

export interface ICompanyModel extends ShowCompanyViewModel {
  id: string;
}

export default class CompanyRepository extends AbstractRepository {
  public static tableName = 'company'
  public CreateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  public getCompanies(): Promise< []> {
    return this.knex(CompanyRepository.tableName).select(companyColoums)
  }
  public getCompany(uuid:string): Promise< [ICompanyModel]> {
   console.log("knex uuid..",uuid)
   return  this.knex(CompanyRepository.tableName).where('uuid', uuid).select('id','uuid', 'name', 'memberSince', 'addressBillingCity', 'addressBillingPhone');
  }  
  public addCompany(name:string,addressBillingCity:string, memberSince:string): Promise< [ICompanyModel]> {
    return this.knex.insert({
    uuid:this.CreateUUID(),
    name:name,
    addressBillingCity:addressBillingCity,
    memberSince: memberSince,
    taxationCountry: 'DE',
    germanVatNumber: '1233323',
    subscriptionFee: 129,
    commissionFee: 0.5,
    marketplaces: ['DE', 'UK', 'IT', 'FR', 'ES', 'NL'],
    addressBillingFullName: 'Max Musterperson',
    addressBillingLine1: 'SPACEGOATS GmbH',
    addressBillingLine2: 'Alexanderstraße 23',
    addressBillingPhone: '0711 123456',
    addressBillingState: 'Baden-Württemberg',
    addressBillingZip: '70184',
    addressBillingCountry: 'DE',
    registerNumber: 'DE1122111',
    legalForm: 'GmbH',
    personAccountable: 'Max Musterperson',}).into(CompanyRepository.tableName)
  }
  public deleteCompany(uuid:string): Promise< []> {
    return this.knex.select().from(CompanyRepository.tableName).having('uuid', '=', uuid).clearHaving()
  }
}
