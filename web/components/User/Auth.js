// Libraries
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const Auth = props => (
  <Query {...props} query={currentUserQuery}>
    { payload => props.children(payload) }
  </Query>
)

export const currentUserQuery = gql`
  query {
    me {
      id
      email
      name
      imageUrl
      links {
        slug
        title
      }
      likes {
        link {
          slug
          title
        }
      }
    }
  }
`