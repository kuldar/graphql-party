// Libraries
import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import Router from 'next/router'
import gql from 'graphql-tag'
import styled from 'styled-components'

// Link Form
class LinkForm extends Component {

  state = {
    title: '',
    url: '',
    oneliner: '',
    description: '',
    readmeUrl: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Mutation
        mutation={createLinkMutation}
        variables={this.state}>

        {(createLink, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault()
              const res = await createLink()
              console.log(res)

              Router.push({ pathname: `/link/${res.data.createLink.slug}`})
            }}>
            { error && <div>{error}</div> }

            <Card disabled={loading}>
              <Field htmlFor="title">
                <Label>Title</Label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  required
                  value={this.state.title}
                  onChange={this.handleChange} />
              </Field>

              <Field htmlFor="url">
                <Label>Url</Label>
                <Input
                  type="text"
                  id="url"
                  name="url"
                  placeholder="Url"
                  required
                  value={this.state.url}
                  onChange={this.handleChange} />
              </Field>

              <Field htmlFor="oneliner">
                <Label>Oneliner</Label>
                <Input
                  type="text"
                  id="oneliner"
                  name="oneliner"
                  placeholder="Oneliner"
                  required
                  value={this.state.oneliner}
                  onChange={this.handleChange} />
              </Field>

              <Field htmlFor="description">
                <Label>Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Description"
                  onChange={this.handleChange}>
                  {this.state.description}
                </Textarea>
              </Field>

              <Field htmlFor="readmeUrl">
                <Label>Readme Url</Label>
                <Input
                  type="text"
                  id="readmeUrl"
                  name="readmeUrl"
                  placeholder="Readme Url"
                  value={this.state.readmeUrl}
                  onChange={this.handleChange} />
              </Field>
              <button type="submit">Submit</button>
            </Card>
          </Form>
        )}
      </Mutation>
    )
  }
}

// Create Link Mutation
const createLinkMutation = gql`
  mutation createLinkMutation(
    $title: String!
    $url: String!
    $oneliner: String!
    $description: String
    $readmeUrl: String
  ) {
    createLink(
      title: $title
      url: $url
      oneliner: $oneliner
      description: $description
      readmeUrl: $readmeUrl
    ) {
      id
      slug
      url
      title
      oneliner
      description
    }
  }
`

// Styles
const Card = styled.div`
  background-color: ${p => p.theme.white};
  box-shadow: ${p => p.theme.boxShadow};
  overflow: hidden;
  padding: 1rem;
  max-width: 30rem;
  margin: 1rem auto;
`

const Form = styled.form``

const Field = styled.label`
  display: block;
  border-bottom: 1px solid ${p => p.theme.gray1 };
  padding: 16px 0;
  max-width: 500px;
  margin: 0 auto;
`

const Label = styled.div`
  font-weight: bold;
`

const Input = styled.input`
  display: block;
  width: 100%;
`

const Textarea = styled.textarea`
  display: block;
  width: 100%;
`

export default LinkForm