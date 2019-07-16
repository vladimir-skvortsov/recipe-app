import React, { useReducer } from 'react'
import { Layout } from 'antd'
import { withRouter, RouteComponentProps, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { ApolloQueryResult } from 'apollo-boost'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { hot } from 'react-hot-loader'
import { flow } from 'lodash'

import RecipesQuery from '@client/queries/Recipes.graphql'

import Recipe from '@client/types/Recipe'

import { Content } from './App.styles'
import ErrorBoundary from '@client/components/ErrorBoundary/ErrorBoundary'
import GlobalStyle from '@client/components/GlobalStyle/GlobalStyle'
import Header from '@client/components/Header/Header'
import Footer from '@client/components/Footer/Footer'
import AddRecipeModal from '@client/components/AddRecipeModal/AddRecipeModal'
import RecipeModal from '@client/components/RecipeModal/RecipeModal'
import {
  Home,
  NotFound,
} from '@client/components/Scenes/Scenes'

import reducer, { initialState } from './App.reducer'


interface RecipesResponse {
  recipes: Recipe[]
}

export interface Props extends RouteComponentProps {
  recipes: Recipe[]

  refetchRecipes: () => Promise<ApolloQueryResult<RecipesResponse>>
}


const App = ({
  recipes = [],
  location: { key },

  refetchRecipes,
}: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <ErrorBoundary>
      <GlobalStyle />

      <AddRecipeModal
        visible={state.addRecipeModalOpen}
        closeRecipeModal={() => dispatch({ type: 'toggleAddRecipeModal' })}
        refetchRecipes={refetchRecipes}
      />

      <RecipeModal
        visible={Boolean(state.recipeModalOpen)}
        closeRecipeModal={() => dispatch({ type: 'toggleRecipeModal', id: null })}
        recipe={recipes.find(({ id }) => id === state.recipeModalOpen)}
        refetchRecipes={refetchRecipes}
      />

      <Layout>
        <Header openRecipeModal={() => dispatch({ type: 'toggleAddRecipeModal' })} />

        <Content>
          <TransitionGroup>
            <CSSTransition
              key={key}
              timeout={300}
              classNames='fade'
              exit={false}
            >
              <Switch>
                <Route
                  exact
                  path='/'
                  render={() => (
                    <Home
                      recipes={recipes}
                      toggleRecipeModal={id => dispatch({ type: 'toggleRecipeModal', id })}
                    />
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Content>

        <Footer />
      </Layout>
    </ErrorBoundary>
  )
}


export default flow([
  graphql<{}, RecipesResponse, {}, any>(gql(RecipesQuery), {
    props: ({ data: { recipes, refetch } }) => ({ recipes, refetchRecipes: refetch }),
    options: { fetchPolicy: 'no-cache' },
  }),
  withRouter,
  hot(module),
])(App)
