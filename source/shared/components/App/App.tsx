import React, { useReducer } from 'react'
import { Layout } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { hot } from 'react-hot-loader'

import { Content } from './App.styles'
import ErrorBoundary from '@client/components/ErrorBoundary/ErrorBoundary'
import GlobalStyle from '@client/components/GlobalStyle/GlobalStyle'
import Header from '@client/components/Header/Header'
import Router from '@client/components/Router/Router'
import Footer from '@client/components/Footer/Footer'

import AddRecipeModal from '@client/components/AddRecipeModal/AddRecipeModal'

import reducer, { initialState } from './App.reducer'


const App = ({ location: { key } }: RouteComponentProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ErrorBoundary>
      <GlobalStyle />

      <AddRecipeModal
        visible={state.modals.addRecipe}
        closeRecipeModal={() => dispatch({ type: 'toggleModal', name: 'addRecipe', open: false })}
      />

      <Layout>
        <Header openRecipeModal={() => dispatch({ type: 'toggleModal', name: 'addRecipe', open: true })} />

        <Content>
          <TransitionGroup>
            <CSSTransition
              key={key}
              timeout={300}
              classNames='fade'
              exit={false}
            >
              <Router />
            </CSSTransition>
          </TransitionGroup>
        </Content>

        <Footer />
      </Layout>
    </ErrorBoundary>
  )
}


const AppWithRouter = withRouter(App)


export default hot(module)(AppWithRouter)
