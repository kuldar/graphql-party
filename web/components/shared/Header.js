// Libraries
import styled from 'styled-components'
import { withRouter } from 'next/router'
import Link from 'next/link'
import { darken } from 'polished'

import { Auth } from '../User/Auth'
import Signout from '../User/Signout'

// Locals
import Logo from '../../assets/Logo'

// Header
const Header = ({ router }) => (
  <Auth>
    {({ data: { me }}) => (
      <Container>
        {console.log({router})}
        <Link href='/'><LogoLink><Logo /></LogoLink></Link>
        { me ?
            <Nav>
              {/* <Link href='/tags'><NavLink isActive={ router.pathname === '/tags' }>Tags</NavLink></Link> */}
              <Link href='/link/new' prefetch><NavLink isActive={ router.pathname === '/newLink' }>Submit a link</NavLink></Link>
              <Link href='/profile'>
                <UserLink>
                  { me.imageUrl
                      ? <UserImage src={me.imageUrl} />
                      : <UserInitial>{me.name.charAt(0)}</UserInitial>
                  }
                </UserLink>
              </Link>
            </Nav> :
            <Nav>
              {/* <Link href='/tags'><NavLink isActive={ router.pathname === '/tags' }>Tags</NavLink></Link> */}
              <Link href='/join' prefetch><JoinLink isActive={ router.pathname === '/join' }>Join</JoinLink></Link>
            </Nav>
        }
      </Container>
    )}
  </Auth>
)


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

const JoinLink = styled.a`
  transition: ${p => p.theme.transition};
  color: ${p => p.theme.white};
  background-image: ${p => p.isActive ? 'transparent' : p.theme.purpleToBlue};
  background-color: ${p => p.isActive ? p.theme.darkBlue : 'none' };
  font-weight: 500;
  border-radius: ${p => p.theme.radius};
  padding:  0.25rem 0.375rem;
  line-height: 1;
  font-size: 1rem;
  margin: 0 0.625rem;

  &:hover { cursor: pointer; }

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
  height: 2rem;
  width: 2rem;
  border-radius: ${p => p.theme.circle};
`

const UserInitial = styled.div`
  display: flex;
  transition: ${p => p.theme.transition};
  background-color: ${p => p.theme.darkBlue};
  color: ${p => p.theme.white};
  height: 2rem;
  width: 2rem;
  border-radius: ${p => p.theme.circle};
  align-items: center;
  justify-content: center;
  font-weight: bold;
`

export default withRouter(Header)