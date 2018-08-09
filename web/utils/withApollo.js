// Libraries
import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'

// With Apollo
export default withApollo(({ headers }) => (

  new ApolloClient({
    uri: process.env.SERVER_URL,
    request: operation => {
      operation.setContext({
        fetchOptions: { credentials: 'include' },
        headers
      })
    }
  })

))