import { ApolloClient } from 'apollo-client'
import { SchemaLink } from 'apollo-link-schema'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components'
import React from 'react'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { StaticRouter } from 'react-router-dom'
import { Capture } from 'react-loadable'
import { renderToString } from 'react-dom/server'
import { getBundles } from 'react-loadable/webpack'
import Helmet from 'react-helmet'
import { minify } from 'html-minifier'

import App from '@shared/components/App/App'

import renderMarkup from '@server/utils/renderMarkup/renderMarkup'
import logger from '@server/utils/logger/logger'
import schema from '@server/utils/schema/schema'

import theme from '@shared/data/theme'
import { reactLoadableStats } from '@server/data/stats'


const root = async ({ url }, response) => {
  try {
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: new SchemaLink({ schema }),
      ssrMode: true,
    })
    const sheet = new ServerStyleSheet()
    const context = {}
    const chunkNames = []
    const jsx =
      <ApolloProvider client={client}>
        <StyleSheetManager sheet={sheet.instance}>
          <ThemeProvider theme={theme}>
            <StaticRouter location={url} context={context}>
              <Capture report={chunkName => chunkNames.push(chunkName)}>
                <App />
              </Capture>
            </StaticRouter>
          </ThemeProvider>
        </StyleSheetManager>
      </ApolloProvider>

    await getDataFromTree(jsx)
    const content = renderToString(jsx)
    const apolloState = client.extract()
    const helmet = Helmet.renderStatic()
    const styleTags = sheet.getStyleTags()
    const bundles = getBundles(reactLoadableStats, chunkNames)
    const styles = bundles.filter(({ file }) => file.endsWith('.css'))
    const scripts = bundles.filter(({ file }) => file.endsWith('.js'))
    const markup = renderMarkup({
      apolloState,
      content,
      helmet,
      scripts,
      styleTags,
      styles,
    })
    const minifiedMarkup = minify(markup, {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
    })

    response
      .type('text/html')
      .send(minifiedMarkup)
  } catch (error) {
    logger.error(error)
    response.sendStatus(500)
  }
}


export default root
