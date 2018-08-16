// Libraries
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Locals
import LinkRow from '../Link/LinkRow'
import TagLinkListHeader from './TagLinkListHeader'

// Tag Link List
const TagLinkList = ({ tagId }) => (
  <Query
    query={linksQuery}
    variables={{ id: tagId }}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading…</div>
      if (error) return <div>Error!</div>

      const { id, slug, title, oneliner, imageUrl, links } = data.tag

      return (
        <Card>
          <TagLinkListHeader
            title={title}
            oneliner={oneliner}
            imageUrl={imageUrl} />
          <List>
            { links && links.map((link, i) => <LinkRow link={link} key={i} />) }
          </List>
        </Card>
      )
    }}
  </Query>
)

// Styles
const Card = styled.div`
  background-color: ${p => p.theme.white};
  box-shadow: ${p => p.theme.boxShadow};
`

const List = styled.div``

export const linksQuery = gql`
  query TagLinksQuery($id: ID!) {
    tag(id: $id) {
      id
      slug
      title
      oneliner
      imageUrl
      links {
        id
        slug
        url
        title
        oneliner
        description
        tags {
          id
          slug
        }
        likes {
          id
        }
        comments {
          id
        }
        createdAt
      }
    }
  }
`

export default TagLinkList