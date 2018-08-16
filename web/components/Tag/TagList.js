// Libraries
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Locals
import TagCard from './TagCard'

// Tag List
const TagList = () => (
  <Query query={tagsQuery}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading…</div>
      if (error) return <div>Error!</div>

      const { tags } = data

      return (
        <Container>
          { tags && tags.map((tag, i) => <TagCard tag={tag} key={i} />) }
        </Container>
      )
    }}
  </Query>
)

// Styles
const Container = styled.div``

export const tagsQuery = gql`
  query TagsQuery {
    tags {
      id
      slug
      title
      oneliner
      imageUrl
    }
  }
`

export default TagList