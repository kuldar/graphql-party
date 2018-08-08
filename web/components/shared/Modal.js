// Libraries
import React, { Component } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

// Locals
import LinkCard from '../Link/LinkCard'

// Modal
class Modal extends Component {

  constructor(props) {
    super(props)
    this.overlay = React.createRef()
    this.container = React.createRef()
  }

  dismiss(e) {
    if (this.overlay.current === e.target || this.container.current === e.target) {
      if (this.props.onDismiss) { this.props.onDismiss() }
    }
  }

  render() {
    return (
      <Overlay
        innerRef={this.overlay}
        onClick={(e) => this.dismiss(e)}>
        <Container innerRef={this.container}>
          <LinkCard linkId={this.props.linkId} />
        </Container>
      </Overlay>
    )
  }
}

const Overlay = styled.div`
  display: flex;
  position: fixed;
  overflow: auto;
  z-index: 10;
  background: ${p => rgba(p.theme.black, 0.4)};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 2rem;
`

const Container = styled.div`
  margin: auto;
  position: relative;
  z-index: 100;
  margin: auto;
  max-width: ${p => p.theme.modalWidth};
`

export default Modal