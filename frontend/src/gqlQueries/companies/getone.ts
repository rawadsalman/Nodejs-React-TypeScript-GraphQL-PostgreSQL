import gql from 'graphql-tag'

export const GET_COMPANY_DETAILS = gql`
  query getcompanydetails($uuid:String!,$pathBuilder: any){
    company (uuid: $uuid, pathBuilder:$pathBuilder) @rest(type:"ShowCompanyViewModel", path: "companies/:uuid", pathBuilder: $pathBuilder) {
      id,
      uuid,
      name,
      memberSince,
      addressBillingCity,
      addressBillingPhone
    
    }
  }
  `

export default GET_COMPANY_DETAILS
