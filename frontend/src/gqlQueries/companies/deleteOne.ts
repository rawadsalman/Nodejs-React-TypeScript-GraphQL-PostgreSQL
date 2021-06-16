import gql from 'graphql-tag'


export const DELETE_COMPANY = gql`
mutation($uuid:String!) {
  deletecompany(uuid: $uuid)
}
`
export default DELETE_COMPANY
