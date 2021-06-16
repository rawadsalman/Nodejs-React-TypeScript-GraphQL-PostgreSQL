import gql from 'graphql-tag'
import companyColumns from './company.columns'

export const GET_ALL_COMPANIES = gql`
  query getAllCompanies($pathBuilder: any) {
    companies @rest(type: "ShowCompanyViewModel", path: "companies", pathBuilder: $pathBuilder) {
      ${companyColumns.join()}
    }
  }
  `

export default GET_ALL_COMPANIES
