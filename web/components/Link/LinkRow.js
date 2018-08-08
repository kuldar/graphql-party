// Libraries
import Router from 'next/router'
import styled from 'styled-components'
import { darken } from 'polished'

// Locals
import LinkVote from './LinkVote'

// Link Row
const LinkRow = ({ link }) => {

  const showLink = (e, id) => {
    e.preventDefault()
    Router.push(`/?id=${id}`, `/link/${id}`)
  }

  return (
    <LinkContainer>
      <Link
        key={link.id}
        href={`/link/${link.id}`}
        onClick={(e) => showLink(e, link.id)}>
        <LinkVote votesCount={link.likes.length} isVoted={link.isVoted} />
        <LinkContent>
          <Top>
            <Title>{link.title}</Title>
            <Tags>{ link.tags.map((tag, i)=> <Tag key={i}>#{tag.slug}</Tag>) }</Tags>
          </Top>
          <Bottom>
            <OneLiner>{link.oneliner}</OneLiner>
            <Comments>{link.comments.length > 0 && `${link.comments.length} ${link.comments.length === 1 ? 'comment' : 'comments'}`}</Comments>
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
`

const LinkContent = styled.div`
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

const Title = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.25rem;
  margin-right: 0.5rem;
`

const Tags = styled.div``

const Tag = styled.div`
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
`

const Comments = styled.div`
  transition: ${p => p.theme.transition};
  color: ${p => p.theme.gray3};

  &:hover {
    cursor: pointer;
    color: ${p => darken(0.2, p.theme.gray3)};
  }
`

export default LinkRow