// Libraries
import React, { Component } from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { currentUserQuery } from '../User/Auth'
import { linksQuery } from '../Link/LinkList'

export class LinkLike extends Component {
  render() {
    return (
      <Mutation
        mutation={likeLinkMutation}
        variables={{slug: this.props.linkSlug}}
        refetchQueries={[
          { query: currentUserQuery },
          { query: linksQuery }
        ]}>
        {(likeLink, { loading }) => (
          this.props.render({likeLink})
        )}
      </Mutation>
    )
  }
}

// Link Like
// const LinkLike = ({ votesCount, isLiked, linkSlug }) => (
//   <LinkLikeMutation
//     linkSlug={linkSlug}
//     render={({ likeLink }) => (
//       <Container
//         isLiked={isLiked}
//         onClick={likeLink}>
//         <ArrowContainer><Arrow /></ArrowContainer>
//         <Count>{votesCount}</Count>
//       </Container>
//     )} />
// )

// Like Link Mutation
const likeLinkMutation = gql`
  mutation likeLink($slug: String!) {
    likeLink(slug: $slug) { id }
  }
`

export default LinkLike