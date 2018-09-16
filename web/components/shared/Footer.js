// Libraries
import styled from 'styled-components'
import Link from 'next/link'

// Footer
const Footer = () => {
  return (
    <Container>
      <FooterLink href="https://twitter.com/graphqlparty">@graphqlparty</FooterLink>
      <FooterLink href="https://twitter.com/kkuldar">
        by <img src='https://cdn.pbrd.co/images/HupyS9O.png' /> Kuldar
      </FooterLink>
    </Container>
  )
}


// Styles
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  color: ${p => p.theme.gray2};

  img {
    background-color: ${p => p.theme.white};
    border-radius: ${p => p.theme.circle};
    height: 1.5rem;
    width: 1.5rem;
    margin: 0 0.5rem;
  }
`

export default Footer