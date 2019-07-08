import React from 'react'
import { locale } from 'moment'
import { hydrate } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { preloadReady } from 'react-loadable'

import 'moment/locale/en-gb'

import ScrollToTop from '@client/components/ScrollToTop/ScrollToTop'
import App from '@shared/components/App/App'

import registerServiceWorker from '@client/utils/registerServiceWorker/registerServiceWorker'
import apolloClient, { waitOnCache } from '@client/utils/apolloClient/apolloClient'
import store from '@client/utils/store/store'
import theme from '@shared/data/theme'


const rootElement = document.getElementById('root')


Promise.all([
  preloadReady(),
  waitOnCache,
])
  .then(() => {
    hydrate(
      <ApolloProvider client={apolloClient}>
        <ReduxProvider store={store}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <ScrollToTop>
                <App />
              </ScrollToTop>
            </BrowserRouter>
          </ThemeProvider>
        </ReduxProvider>
      </ApolloProvider>,
      rootElement,
    )
  })


registerServiceWorker()
locale('en')
