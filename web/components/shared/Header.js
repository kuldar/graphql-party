// Libraries
import styled from 'styled-components'
import Link from 'next/link'
import { darken } from 'polished'

// Locals
import Logo from '../../assets/Logo'

// Header
const Header = () => {
  return (
    <Container>
      <Link href='/'><LogoLink><Logo /></LogoLink></Link>
      <Nav>
        <Link href='/'><NavLink isActive>Links</NavLink></Link>
        <Link href='/tags'><NavLink>Tags</NavLink></Link>
        <Link href='/submit'><NavLink>Submit a link</NavLink></Link>
        <Link href='https://twitter.com/graphqlparty'><NavLink>@graphqlparty</NavLink></Link>
        <UserLink>
          <UserImage src='https://cdn.pbrd.co/images/HupyS9O.png' />
        </UserLink>
      </Nav>
    </Container>
  )
}


// Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoLink = styled.a`
  display: block;
  svg { transition: ${p => p.theme.transition}; }

  &:hover {
    cursor: pointer;
    svg { transform: scale(1.05) rotate(-2deg); }
  }

  &:active {
    position: relative;
    top: 1px;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
`

const NavLink = styled.a`
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

const UserLink = styled.a`
  margin-left: 1rem;

  &:active {
    position: relative;
    top: 1px;
  }

  &:hover {
    cursor: pointer;
    img { transform: scale(1.1); }
  }
`

const UserImage = styled.img`
  transition: ${p => p.theme.transition};
  background-color: ${p => p.theme.white};
  height: 2.5rem;
  width: 2.5rem;
  border-radius: ${p => p.theme.circle};
`

export default Header