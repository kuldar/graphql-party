// Libraries
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { currentUserQuery } from './Auth'

const Signout = props => (
  <Mutation
    mutation={signoutMutation}
    refetchQueries={[{query: currentUserQuery}]}>
    { signout => <button onClick={signout}>Sign out</button> }
  </Mutation>
)

const signoutMutation = gql`
  mutation signoutMutation {
    signout { message }
  }
`

export default Signout