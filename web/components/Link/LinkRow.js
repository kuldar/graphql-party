// Libraries
import Router from 'next/router'
import styled from 'styled-components'
import { darken } from 'polished'

// Locals
import LinkLike from './LinkLike'
import Arrow from '../../assets/Arrow'

// Link Row
const LinkRow = ({ link }) => {
  const { slug, likes, isLiked, title, tags, oneliner, comments } = link

  return (
    <LinkContainer>
      <Link href={`/link/${slug}`}>
        <LinkLike
          linkSlug={slug}
          render={({ likeLink }) => (
            <LikeContainer
              isLiked={isLiked}
              onClick={likeLink}>
              <LikeArrowContainer><Arrow /></LikeArrowContainer>
              <LikeCount>{likes.length}</LikeCount>
            </LikeContainer>
          )} />
        <LinkContent>
          <Top>
            <Title>{title}</Title>
            <Tags>{ tags.map((tag, i)=> <Tag key={i} href={`/tag/${tag.slug}`}>#{tag.slug}</Tag>) }</Tags>
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

const LikeContainer = styled.a`
  flex-shrink: 0;
  transition: all .15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem;
  border: 1px solid ${p => p.isLiked ? 'none' : p.theme.gray4};
  background-image: ${p => p.isLiked ? p.theme.purpleToBlue : 'none' };
  color: ${p => p.isLiked ? p.theme.white : p.theme.gray3 };
  border-radius: ${p => p.theme.radius};
  min-width: 2.5rem;
  margin-right: 1rem;

  &:hover {
    transform: translateY(-1px);
    border: 1px solid ${p => p.isLiked ? 'none' : p.theme.purple};
    color: ${p => p.isLiked ? p.theme.white : p.theme.purple };
  }

  &:active {
    transform: translateY(1px);
  }
`

const LikeArrowContainer = styled.div`
  svg { display: block; }
`

const LikeCount = styled.div`
  margin-top: 0.5rem;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.125rem;
`

export default LinkRow