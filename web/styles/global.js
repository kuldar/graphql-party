import { css } from 'styled-components'
import theme from './theme'

export const documentStyles = css`
  html,
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${theme.black};
    background-color: ${theme.gray1};
    background-image: url('/static/grid.svg');
    background-size: contain;
    background-attachment: fixed;
    background-position: top center;
    background-repeat: no-repeat;
    font-family: ${theme.mainFont};
    line-height: 1.25;
    font-size: 16px;

    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-decoration-skip-ink: auto;
    text-decoration-skip: ink;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    font-size: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  ul, ol, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ::selection {
    background: ${theme.black};
    color: ${theme.white};;
  }
`