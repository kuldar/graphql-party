// Libraries
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import marked from 'marked'
import moment from 'moment'

// Local
import Arrow from '../../assets/Arrow'
import LinkArrow from '../../assets/LinkArrow'
import Plus from '../../assets/Plus'

// Link Card
class LinkCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isDescriptionExpanded: false
    }
  }

  render() {
    const { linkId } = this.props
    const { isDescriptionExpanded } = this.state

    const expandDescription = (e) => {
      e.preventDefault()
      this.setState({isDescriptionExpanded: true})
    }

    const collapseDescription = (e) => {
      e.preventDefault()
      this.setState({isDescriptionExpanded: false})
    }

    return (
      <Query
        query={linkQuery}
        variables={{ id: linkId }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading…</div>
          if (error) return <div>Error!</div>

          const { link } = data
          const descriptionHtml = {
            __html: marked(
              unescape(link.description),
              {
                sanitize: false,
                breaks: true
              }
            )
          }

          return (
            <Card>
              <LinkHeader>
                <LinkVote>
                  <ArrowContainer><Arrow /></ArrowContainer>
                  <Count>{link.likes.length}</Count>
                </LinkVote>

                <LinkInfo>
                  <LinkTitleContainer>
                    <LinkTitle>{link.title}</LinkTitle>

                    <LinkTags>
                      { link.tags.map(tag => <LinkTag key={tag.id}>#{tag.slug}</LinkTag>) }
                    </LinkTags>
                  </LinkTitleContainer>

                  <LinkOneliner>{link.oneliner}</LinkOneliner>
                </LinkInfo>

                <LinkViewButton href={link.url} target="_blank">
                  View
                  <LinkArrow />
                </LinkViewButton>

              </LinkHeader>

              { link.description &&
                <LinkDescription>
                  <LinkDescriptionContent
                    isOpen={isDescriptionExpanded}
                    dangerouslySetInnerHTML={descriptionHtml} />
                  {
                    isDescriptionExpanded
                    ? <LinkDescriptionExpandButton onClick={collapseDescription}>
                        Collapse
                        <Plus />
                      </LinkDescriptionExpandButton>
                    : <LinkDescriptionExpandButton onClick={expandDescription}>
                        Show more
                        <Plus />
                      </LinkDescriptionExpandButton>
                  }
                </LinkDescription>
              }

              <LinkComments>

                { link.comments.length > 0 &&
                  link.comments.map(comment =>
                  <LinkComment>
                    <LinkCommentAvatar src={comment.author.imageUrl} />
                    <LinkCommentGroup>
                      <LinkCommentName>{comment.author.name}</LinkCommentName>
                      <LinkCommentBody>{comment.text}</LinkCommentBody>
                      <LinkCommentTimeAgo>{moment(comment.createdAt).fromNow()}</LinkCommentTimeAgo>
                    </LinkCommentGroup>
                  </LinkComment>
                )}

                <LinkCommentForm>
                  <LinkCommentFormAvatar src='https://cdn.pbrd.co/images/HupyS9O.png' />
                  <LinkCommentFormGroup>
                    <LinkCommentFormTextarea placeholder="Got some thoughts on the link?" />
                    <LinkCommentFormButton>Comment</LinkCommentFormButton>
                  </LinkCommentFormGroup>
                </LinkCommentForm>
              </LinkComments>
            </Card>
          )
        }}
      </Query>
    )
  }
}

// Link Query
export const linkQuery = gql`
  query LinkQuery($id: ID!) {
    link(id: $id) {
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
        text
        author {
          name
          imageUrl
        }
        createdAt
      }
    }
  }
`

// Styles
const Card = styled.div`
  background-color: ${p => p.theme.white};
  box-shadow: ${p => p.theme.boxShadow};
  overflow: hidden;
  padding: 1rem;
`

// Link Header
const LinkHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: ${p => p.theme.darkBlueToBlue};
  border-radius: ${p => p.theme.radius};
  padding: 1.5rem;
`

// Link Vote
const LinkVote = styled.div`
  transition: all .15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem;
  background: ${p => p.isVoted ? p.theme.purpleToBlue : p.theme.white };
  color: ${p => p.isVoted ? p.theme.white : p.theme.gray3 };
  border-radius: ${p => p.theme.radius};
  box-shadow: ${p => p.theme.boxShadow};
  min-width: 2.5rem;
  margin-right: 1.5rem;

  &:hover {
    cursor: pointer;
    color: ${p => p.isVoted ? p.theme.white : p.theme.purple };
    transform: translateY(-1px);
  }

  &:active {
    position: relative;
    top: 1px;
    transform: translateY(1px);
  }
`

const ArrowContainer = styled.div`
  svg { display: block; }
`

const Count = styled.div`
  margin-top: 0.5rem;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: ${p => p.theme.black};
`

// Link Info
const LinkInfo = styled.div`
  flex: 1;
`

// Link Title
const LinkTitleContainer = styled.header`
  display: flex;
  align-items: center;
`

const LinkTitle = styled.h2`
  margin: 0;
  color: ${p => p.theme.white};
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.5rem;
`

// Link Tags
const LinkTags = styled.div`
  display: flex;
`

const LinkTag = styled.div`
  color: ${p => p.theme.white};
  opacity: 0.6;
  font-size: 1.125rem;
  line-height: 1.125rem;
  margin-left: 1rem;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

// Link Oneliner
const LinkOneliner = styled.div`
  margin-top: 0.5rem;
  font-size: 1.125rem;
  color: ${p => p.theme.white};
`

// Link View Button
const LinkViewButton = styled.a`
  display: inline-block;
  position: relative;
  transition: all .15s ease;
  box-shadow: ${p => p.theme.boxShadow};
  background-color: ${p => p.theme.white};
  border-radius: ${p => p.theme.radius};
  font-size: 1.125rem;
  line-height: 1;
  font-weight: 700;
  padding: 0.675rem 0.875rem;
  margin-right: 0.5rem;

  svg {
    margin-left: 0.5rem;
    opacity: 0.75;
    transition: all .15s ease;
    -webkit-transform: translateZ(0);
  }

  &:hover {
    transform: translateY(-1px);
    cursor: pointer;
    svg { opacity: 1; }
  }

  &:active {
    transform: translateY(1px);
  }
`

// Link Description
const LinkDescription = styled.div`
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.gray6};
  padding: 2rem;
  margin-top: 1rem;

  img { max-width: 100%; }

  code {
    font-size: 0.875rem;
    background-color: ${p => p.theme.gray4};
  }

  pre {
    background-color: ${p => p.theme.gray4};
    border-radius: ${p=> p.theme.radius};
    code { background-color: transparent; }
  }

  a { text-decoration: underline; }
  h1 { font-size: 1.325rem; }
  h2 { font-size: 1.25rem; }
  h3 { font-size: 1.125rem; }
  h4, h5, h6 { font-size: 1rem; }

  ul, ul li { list-style: disc inside; }
`

const LinkDescriptionContent = styled.div`
  position: relative;
  max-height: ${p => p.isOpen ? 'auto' : '300px'};
  overflow: hidden;

  &:after {
    display: ${p => p.isOpen ? 'none' : 'block'};
    content: '';
    position: absolute;
    height: 5rem;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${p => p.theme.transparentToGray6};
  }
`

// Link Description Expand Button
const LinkDescriptionExpandButton = styled.div`
  transition: all .15s ease;
  display: inline-block;
  box-shadow: ${p => p.theme.boxShadow};
  background-color: ${p => p.theme.white};
  border-radius: ${p => p.theme.radius};
  font-size: 1.125rem;
  line-height: 1;
  font-weight: 700;
  padding: 0.675rem 0.875rem;
  margin-top: 1.25rem;
  margin-right: 0.5rem;

  svg {
    transition: all .15s ease;
    -webkit-transform: translateZ(0);
    margin-left: 0.5rem;
    opacity: 0.75;
  }

  &:hover {
    transform: translateY(-1px);
    cursor: pointer;
    svg { opacity: 1; }
  }

  &:active {
    transform: translateY(1px);
  }
`

// Link Comments
const LinkComments = styled.div`
  padding: 2rem;
`

const LinkComment = styled.div`
  display: flex;
  border-bottom: 1px solid ${p => p.theme.gray4};
  padding: 1.5rem 0;
`

const LinkCommentAvatar = styled.img`
  flex-shrink: 0;
  height: 2rem;
  width: 2rem;
  border-radius: ${p => p.theme.circle};
  margin-right: 1.5rem;
`

const LinkCommentGroup = styled.div``

const LinkCommentName = styled.div`
  font-size: 1.125rem;
  line-height: 1.125rem;
  font-weight: 500;
`

const LinkCommentBody = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.25rem;
`

const LinkCommentTimeAgo = styled.div`
  color: ${p => p.theme.gray3};
  margin-top: 0.5rem;
`

// Link Comment Form
const LinkCommentForm = styled.div`
  display: flex;
  padding: 1.5rem 0 0 0;
`

const LinkCommentFormAvatar = styled.img`
  flex-shrink: 0;
  height: 2rem;
  width: 2rem;
  border-radius: ${p => p.theme.circle};
  margin-right: 1.5rem;
`

const LinkCommentFormGroup = styled.div`
  width: 100%;
`

const LinkCommentFormTextarea = styled.textarea`
  resize: none;
  display: block;
  background-color: transparent;
  border: none;
  width: 100%;
  outline: none;
  height: 2rem;
  padding: 0.5rem 0;
  margin-bottom: 1.5rem;
`

const LinkCommentFormButton = styled.div`
  transition: all .15s ease;
  display: inline-block;
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.darkBlue};
  border-radius: ${p => p.theme.radius};
  font-size: 1.125rem;
  line-height: 1.125rem;
  font-weight: 700;
  padding: 0.675rem 0.875rem;
  margin-right: 0.5rem;

  &:hover {
    cursor: pointer;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }
`

export default LinkCard