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
import LinkList from '../components/Link/LinkList'
import Nachos from '../assets/Nachos'
import { site } from '../utils/variables'

// Index
class Index extends Component {

  static getInitialProps ({ query: { id } }) {
    return { linkId: id }
  }

  constructor (props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  componentDidMount() { document.addEventListener('keydown', this.onKeyDown) }
  componentWillUnmount() { document.removeEventListener('keydown', this.onKeyDown) }

  // Close on Esc
  onKeyDown(e) {
    if (!this.props.linkId) return
    if (e.keyCode === 27) { this.props.router.back() }
  }

  dismissModal() {
    this.props.router.back()
  }

  render() {
    const { linkId } = this.props

    return (
      <Fragment>
        { linkId &&
          <Modal
            linkId={linkId}
            onDismiss={() => this.dismissModal()} />
        }
        <Head>
          <title>{site.title}</title>
          <SocialMeta />
          <style>{ linkId && 'body {overflow: hidden;}' }</style>
        </Head>

        <Container>
          <HeaderContainer>
            <Header />
          </HeaderContainer>

          <LinkListContainer>
            <LinkList />
          </LinkListContainer>

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

const LinkListContainer = styled.div`
  position: relative;
  z-index: 1;
`

const NachosContainer = styled.div`
  top: 25px;
  left: -90px;
  position: absolute;
  z-index: 0;
`

export default withRouter(Index)