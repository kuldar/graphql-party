// Libraries
import React, { Component, Fragment } from 'react'
import { withRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'

// Locals
import { Auth } from '../components/User/Auth'
import Signout from '../components/User/Signout'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Nachos from '../assets/Nachos'
import { site } from '../utils/variables'

// Profile
class Profile extends Component {

  render () {

    return (
      <Auth>
        {({ data: { me } }) => (
          <Fragment>
            <Head>
              <title>{site.title}</title>
            </Head>

            <Container>
              <HeaderContainer>
                <Header />
              </HeaderContainer>

              <Main>
                {
                  me
                    ? <div>
                        Hello {me.name}
                        <Signout />
                        <div><strong>My links</strong></div>
                        { me.links && me.links.map(link => <div><a href={`/link/${link.slug}`}>{link.title}</a></div>) }

                        <div><strong>My likes</strong></div>
                        { me.likes && me.likes.map(({ link }) => <div><a href={`/link/${link.slug}`}>{link.title}</a></div>) }
                      </div>
                    : <div>Log in...</div>
                }
              </Main>

              <FooterContainer>
                <Footer />
              </FooterContainer>

              <NachosContainer>
                <Nachos />
              </NachosContainer>
            </Container>
          </Fragment>
        )}
      </Auth>
    )
  }
}

const Container = styled.div`
  position: relative;
  max-width: ${p => p.theme.pageWidth};
  margin: 0 auto;
`

const HeaderContainer = styled.div`
  padding: 2.5rem;
  position: relative;
  z-index: 1;
`

const FooterContainer = styled.div`
  padding: 2.5rem;
  position: relative;
  z-index: 1;
`

const Main = styled.div`
  position: relative;
  z-index: 1;
`

const NachosContainer = styled.div`
  top: 25px;
  left: -90px;
  position: absolute;
  z-index: 0;
`

export default withRouter(Profile)