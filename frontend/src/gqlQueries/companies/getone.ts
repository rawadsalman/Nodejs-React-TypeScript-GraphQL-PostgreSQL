import gql from 'graphql-tag'
import companyColumns from './company.columns'
 
/* export const GET_USER = gql`
query GET_USER { 
  user(id: $id) @rest(type: "User", path: "/users/:id") { 
      id 
      first_name 
      last_name 
   } 
}
` */
export const GET_COMPANY_DETAILS = gql`
  query companydetails($uuid:String!,$pathBuilder: any){
    companydetails(uuid: $uuid, pathBuilder:$pathBuilder) @rest(type: "ShowCompanyViewModel", path: "companies/:uuid", pathBuilder: $pathBuilder) {
      id
      uuid
      name
      memberSince
      addressBillingCity
      addressBillingPhone
    }
  }
  `

export default GET_COMPANY_DETAILS
