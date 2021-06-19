import gql from 'graphql-tag'
   
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
export default CREATE_COMPANY;
