// Libraries
import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { currentUserQuery } from './Auth'

class Signin extends Component {

  state = {
    name: '',
    password: '',
    email: ''
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Mutation
        mutation={signinMutation}
        variables={this.state}
        refetchQueries={[{ query: currentUserQuery }]}>

        {(signup, { error, loading }) => (

          <form
            method="post"
            onSubmit={
              async e => {
                e.preventDefault()
                await signup()
                this.setState({ name: '', email: '', password: '' })
              }}>

            <div disabled={loading}>

              <h2>Sign in</h2>
              { error && <div>{error}</div> }

              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.saveToState} />
              </label>

              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState} />
              </label>

              <button type="submit">Sign In!</button>
            </div>
          </form>
        )}
      </Mutation>
    )
  }
}

const signinMutation = gql`
  mutation signinMutation(
    $email: String!,
    $password: String!
  ) {
    signin(
      email: $email,
      password: $password
    ) {
      id
      email
      name
    }
  }
`

export default Signin