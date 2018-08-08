import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

// Local
import { documentStyles } from '../styles/global'
import normalize from '../styles/normalize'
import { site } from '../utils/variables'

injectGlobal`
  ${normalize}
  ${documentStyles}
`

// Custom Next document with SSR styles injected
export default class MyDocument extends Document {

  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>{ site.title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700' rel='stylesheet' />
          { this.props.styleTags }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
