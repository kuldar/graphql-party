// Libraries
import Router from 'next/router'
import styled from 'styled-components'
import { darken } from 'polished'

// Locals
import LinkVote from './LinkVote'

// Link Row
const LinkRow = ({ link }) => {

  const showLink = (e, id) => {
    if (e.target.tagName.toLowerCase() !== 'object') {
      Router.push(`/?id=${id}`, `/link/${id}`)
    }
  }

  const { id, likes, isVoted, title, tags, oneliner, comments } = link

  return (
    <LinkContainer>
      <Link
        onClick={(e) => showLink(e, id)}
        href={`/link/${id}`}>
        <object type="nested/link">
          <LinkVote
            linkId={id}
            votesCount={likes.length}
            isVoted={isVoted} />
        </object>
        <LinkContent>
          <Top>
            <Title>{title}</Title>
            <object type="nested/link">
              <Tags>{ tags.map((tag, i)=> <Tag key={i} href={`/tag/${tag.slug}`}>#{tag.slug}</Tag>) }</Tags>
            </object>
          </Top>
          <Bottom>
            <OneLiner>{oneliner}</OneLiner>
            <Comments>{comments.length > 0 && `${comments.length} ${comments.length === 1 ? 'comment' : 'comments'}`}</Comments>
          </Bottom>
        </LinkContent>
      </Link>
    </LinkContainer>
  )
}


// Styles
const LinkContainer = styled.div`
  padding: 0 1rem;
  &:last-child { border-bottom: none; }

  &:hover {
    background-color: ${p => p.theme.gray5};
  }
`

const Link = styled.a`
  display: flex;
  padding: 1.5rem 0.25rem;
  border-bottom: 1px solid ${p => p.theme.gray4};

  &:hover { cursor: pointer; }
`

const LinkContent = styled.div`
  display: block;
  flex: 1;
`

const Top = styled.div`
  display: flex;
`

const Bottom = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
`

const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.25rem;
  margin-right: 0.5rem;
`

const Tags = styled.div``

const Tag = styled.a`
  display: inline-block;
  transition: ${p => p.theme.transition};
  color: ${p => p.theme.gray3};
  line-height: 1;
  margin-left: 0.5rem;

  &:hover {
    cursor: pointer;
    color: ${p => darken(0.2, p.theme.gray3)};
  }
`

const OneLiner = styled.div`
  font-size: 1rem;
  line-height: 1.25rem;
  &:hover { cursor: pointer; }
`

const Comments = styled.div`
  transition: ${p => p.theme.transition};
  color: ${p => p.theme.gray3};
`

export default LinkRow