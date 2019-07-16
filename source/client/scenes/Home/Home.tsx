import React from 'react'
import { Row, Col } from 'antd'
import { hot } from 'react-hot-loader'

import Recipe from '@client/types/Recipe'

import Meta from '@client/components/Meta/Meta'
import RecipeCard from '@client/components/RecipeCard/RecipeCard'


export interface Props {
  recipes: Recipe[]

  toggleRecipeModal: (id: string) => any
}


const Home = ({ recipes, toggleRecipeModal }: Props) =>
  <>
    <Meta title='Home' />

    <Row>
      {recipes.map(props => (
        <Col key={props.id} sm={12} md={10} lg={8} xl={6} xxl={4}>
          <RecipeCard {...props} toggleRecipeModal={toggleRecipeModal} />
        </Col>
      ))}
    </Row>
  </>


export default hot(module)(Home)
