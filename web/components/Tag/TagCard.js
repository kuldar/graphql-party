// Libraries
import Router from 'next/router'
import styled from 'styled-components'
import { darken } from 'polished'

// Tag Card
const TagCard = ({ tag }) => {

  const { id, title, oneliner, imageUrl } = tag

  return (
    <Container>
      <Tag href={`/tag/${id}`}>
        <TagIcon src={imageUrl} />
        <TagHeader>
          <Title>{title}</Title>
          <OneLiner>{oneliner}</OneLiner>
        </TagHeader>
      </Tag>
    </Container>
  )
}


// Styles
const Container = styled.div`
  background-color: ${p => p.theme.white};
  box-shadow: ${p => p.theme.boxShadow};
`

const Tag = styled.a`
  display: flex;
  padding: 1.5rem 0.25rem;
  border-bottom: 1px solid ${p => p.theme.gray4};

  &:hover { cursor: pointer; }
`

const TagIcon = styled.img``
const TagHeader = styled.div``

const TagContent = styled.div`
  display: block;
  flex: 1;
`

const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.25rem;
  margin-right: 0.5rem;
`

const OneLiner = styled.div`
  font-size: 1rem;
  line-height: 1.25rem;
  &:hover { cursor: pointer; }
`

export default TagCard