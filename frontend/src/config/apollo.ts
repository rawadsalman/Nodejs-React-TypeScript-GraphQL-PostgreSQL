/* istanbul ignore file */
import { ApolloClient, from, InMemoryCache } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT ? process.env.REACT_APP_API_ENDPOINT : ''
const restLink = new RestLink({
  uri: `${apiEndpoint}${apiEndpoint.endsWith('/') ? '' : '/'}`,
  responseTransformer: async (response) => {
    if (response === null || typeof response.status === 'undefined') {
      return null
    }

    const contentType = response.headers.get('content-type')
    if (contentType.search('application/json') > -1) {
      return response.json()
    }

    if (contentType.search('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') > -1) {
      return { response: response }
    }

    return response.text()
  },
})

export default new ApolloClient({
  link: from([restLink as any]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
})
