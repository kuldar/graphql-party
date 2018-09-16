// Libraries
import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'

// With Apollo
export default withApollo(({ headers }) => (
  new ApolloClient({
    uri: 'http://localhost:4000',
    request: operation => {
      operation.setContext({
        fetchOptions: { credentials: 'include' },
        headers
      })
    }
  })
))