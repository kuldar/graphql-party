// Libraries
import React, { Component, Fragment } from 'react'
import { withRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'

// Locals
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import { SocialMeta } from '../components/shared/SocialMeta'
import TagList from '../components/Tag/TagList'
import Nachos from '../assets/Nachos'
import { site } from '../utils/variables'

// Tags
class Tags extends Component {

  render() {

    return (
      <Fragment>
        <Head>
          <title>{site.title}</title>
          <SocialMeta />
        </Head>

        <Container>
          <HeaderContainer>
            <Header />
          </HeaderContainer>

          <TagListContainer>
            <TagList />
          </TagListContainer>

          <FooterContainer>
            <Footer />
          </FooterContainer>

          <NachosContainer>
            <Nachos />
          </NachosContainer>
        </Container>
      </Fragment>
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

const TagListContainer = styled.div`
  position: relative;
  z-index: 1;
`

const NachosContainer = styled.div`
  top: 25px;
  left: -90px;
  position: absolute;
  z-index: 0;
`

export default withRouter(Tags)