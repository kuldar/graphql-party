// Libraries
import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { currentUserQuery } from './Auth'

class Signup extends Component {

  state = {
    email: '',
    name: '',
    password: ''
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Mutation
        mutation={signupMutation}
        variables={this.state}
        refetchQueries={[{ query: currentUserQuery }]}>

        {(signup, { loading, error }) => (

          <form
            method="post"
            onSubmit={
              async e => {
                e.preventDefault()
                const res = await signup()
              }}>

            <div disabled={loading}>

              <h2>Sign Up</h2>
              { error && <div>{error}</div> }

              <label htmlFor="email">
                Email
                <input
                  value={this.state.email}
                  onChange={this.saveToState}
                  name="email"
                  type="text"
                  placeholder="email" />
              </label>

              <label htmlFor="name">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.saveToState} />
              </label>

              <label htmlFor="signupPassword">
                Password
                <input
                  type="password"
                  name="password"
                  id="signupPassword"
                  className="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState} />
              </label>

              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </Mutation>
    )
  }
}

const signupMutation = gql`
  mutation SignupMutation(
    $email: String!,
    $name: String!,
    $password: String!
  ) {
    signup(
      email: $email,
      name: $name,
      password: $password
    ) {
      id
      email
      name
    }
  }
`

export default Signup
// export { signupMutation }