// Libraries
import styled from 'styled-components'
import { darken } from 'polished'

// Link List Header
const LinkListHeader = () => (
  <Padding>
    <Container>
      <Image image='/static/tags/javascript.svg' />
      <Info>
        <Title>Javascript</Title>
        <OneLiner>Various selection of GraphQL tools and recources</OneLiner>
      </Info>
      <Sort>
        <SortLink isActive>Top</SortLink>
        <SortLink>Recent</SortLink>
      </Sort>
    </Container>
  </Padding>
)

// Styles
const Padding = styled.div`
  padding: 1rem;
`

const Container = styled.div`
  display: flex;
  background-color: ${p => p.theme.gray5};
  padding: 1.5rem;
`

const Image = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  margin-right: 1rem;
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.gray4};
  background-image: ${p => p.image ? `url("${p.image}")` : 'none'};
  background-size: cover;
`

const Info = styled.div`
  flex: 1;
`

const Title = styled.div`
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 500;
`

const OneLiner = styled.div`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.25rem;
  color: ${p => p.theme.gray3};
`

const Sort = styled.nav`
  display: flex;
  align-items: center;
`

const SortLink = styled.a`
  transition: ${p => p.theme.transition};
  color: ${p => p.isActive ? p.theme.white : p.theme.gray2};
  background-color: ${p => p.isActive ? p.theme.darkBlue : 'transparent'};
  font-weight: ${p => p.isActive ? '500' : '400'};
  border-radius: ${p => p.theme.radius};
  padding:  0.25rem 0.375rem;
  line-height: 1;
  font-size: 1rem;
  margin: 0 0.625rem;

  &:hover {
    cursor: pointer;
    color: ${p => p.isActive ? p.theme.white : darken(0.4, p.theme.gray2)};
  }

  &:active {
    position: relative;
    top: 1px;
  }
`

export default LinkListHeader