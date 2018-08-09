// Libraries
import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'

// Locals
import Header from '../components/shared/Header'
import { SocialMeta } from '../components/shared/SocialMeta'
import LinkCard from '../components/Link/LinkCard'
import Nachos from '../assets/Nachos'
import { site } from '../utils/variables'

// Link
class Link extends Component {

  static getInitialProps ({ query: { id } }) {
    return { linkId: id }
  }

  constructor (props) {
    super(props)
  }

  render () {
    const { linkId } = this.props

    return (
      <div>
        <Head>
          <title>{site.title}</title>
          <SocialMeta />
        </Head>

        <Container>
          <HeaderContainer>
            <Header />
          </HeaderContainer>

          <CardContainer>
            <LinkCard linkId={linkId} />
          </CardContainer>

          <NachosContainer>
            <Nachos />
          </NachosContainer>
        </Container>
      </div>
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

const CardContainer = styled.div`
  position: relative;
  z-index: 1;
`

const NachosContainer = styled.div`
  top: 25px;
  left: -90px;
  position: absolute;
  z-index: 0;
`

export default withRouter(Link)