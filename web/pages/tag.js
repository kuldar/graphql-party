// Libraries
import React, { Component, Fragment } from 'react'
import { withRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'

// Locals
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Modal from '../components/shared/Modal'
import { SocialMeta } from '../components/shared/SocialMeta'
import TagLinkList from '../components/Tag/TagLinkList'
import Nachos from '../assets/Nachos'
import { site } from '../utils/variables'

// Tag
class Tag extends Component {

  static getInitialProps ({ query: { id } }) {
    return { tagId: id }
  }

  constructor (props) {
    super(props)
  }

  render () {
    const { tagId } = this.props

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

          <TagLinkListContainer>
            <TagLinkList tagId={tagId} />
          </TagLinkListContainer>

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

const TagLinkListContainer = styled.div`
  position: relative;
  z-index: 1;
`

const NachosContainer = styled.div`
  top: 25px;
  left: -90px;
  position: absolute;
  z-index: 0;
`

export default withRouter(Tag)