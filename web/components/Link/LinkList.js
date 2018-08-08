// Libraries
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Locals
import LinkRow from './LinkRow'
import LinkListHeader from './LinkListHeader'

// Link List
const LinkList = () => (
  <Query query={linksQuery}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading…</div>
      if (error) return <div>Error!</div>

      const { links } = data

      return (
        <Card>
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
  query LinksQuery {
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
`

export default LinkList