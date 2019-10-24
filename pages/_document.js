import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Grommet, grommet } from 'grommet'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // useful for wrapping the whole react tree
          enhanceApp: App => App,
          // useful for wrapping in a per-page basis
          enhanceComponent: Component => Component
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html>
        <Head>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
          />
        </Head>
        <body>
          <Grommet theme={grommet}>
            <Main />
            <NextScript />
          </Grommet>
        </body>
      </Html>
    )
  }
}

export default MyDocument
