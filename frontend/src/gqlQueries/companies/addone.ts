import gql from 'graphql-tag'
import companyColumns from './company.columns'


   
 export const CREATE_COMPANY = gql`
  mutation createcompany($input: ShowCompanyViewModel!,$pathBuilder: any) {
    createcompany (input:$input, pathBuilder:$pathBuilder)
       @rest(type: "ShowCompanyViewModel", path: "companies", pathBuilder: $pathBuilder, method: "POST") { 
     
      name,
      addressBillingCity,
      memberSince
}
}
`    
/* export const CREATE_COMPANY = gql`
mutation Createcompany($input:ShowCompanyViewModel!,$bodyBuilder:any) {
    Createcompany (input:$input,bodyBuilder:$bodyBuilder)
       @rest(type: "ShowCompanyViewModel", path: "/companies", method: "POST",bodyBuilder:$bodyBuilder) { 
      id
      name
      addressBillingCity

}
}
`  */   
/* export const CREATE_COMPANY = gql`
mutation Createcompany {
    Createcompany(input:§input) {
      
          id
          name
          addressBillingCity
          
      
    }
  }
  ` */
/*  export const CREATE_COMPANY = gql`
mutation Createcompany($name: String!,$addressBillingCity:String!,$bodyBuilder:any) {
    Createcompany (name: $name,addressBillingCity: $addressBillingCity)
       @rest(type: "ShowCompanyViewModel", path: "/companies", method: "POST",bodyBuilder:$bodyBuilder) { 
      id
      name
      addressBillingCity

}
}
`   */
/* export const CREATE_COMPANY = gql`
mutation (
    $input: ShowCompanyViewModel!
    $bodyBuilder:any
      ){
    Createcompany(input: $input)
       @rest(type: "ShowCompanyViewModel", path: "/companies", method: "POST",bodyBuilder: $bodyBuilder) { 
      id
      name
      addressBillingCity

}
}
` */
/* export const CREATE_COMPANY = gql`
mutation (
    $someApiWithACustomBodyKey: PublishablePostInput!
    $input: ShowCompanyViewModel!
      ){
    Createcompany(input: $input,body: $someApiWithACustomBodyKey)
       @rest(type: "ShowCompanyViewModel", path: "/companies", method: "POST", bodyKey: "body") { 
      id
      name
      addressBillingCity

}
}
`
 */
/* export const CREATE_COMPANY = gql`
mutation Createcompany($name: String!,$addressBillingCity:String!) {
    post (name: $name,addressBillingCity: $addressBillingCity){
      id
      name
      addressBillingCity

}
}
` */
/* export const CREATE_COMPANY = gql`
mutation Createcompany($name: String!,$addressBillingCity:String!,$uuid:ID!){ 
    uuid
    name
    addressBillingCity
}
`   */
export default CREATE_COMPANY;