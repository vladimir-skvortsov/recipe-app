import React from 'react'
import { Modal, Typography, Tag, Divider, Button, Row, Col, message } from 'antd'
import { FaImage } from 'react-icons/fa'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import Recipe from '@client/types/Recipe'

import { Poster, PosterPlaceholder, TagsContainer } from './RecipeModal.styles'

import RemoveRecipeMutation from '@client/queries/RemoveRecipe.graphql'


interface RemoveRecipeResponse {
  removeRecipe: Recipe
}

interface RemoveRecipeVariables {
  id: string
}

export interface Props {
  visible: boolean
  recipe: Recipe

  closeRecipeModal: () => any
  removeRecipe: (id: string) => any
  refetchRecipes: () => any
  openEditRecipeModal: (id: string) => any
}


const RecipeModal = ({
  visible,
  recipe,

  closeRecipeModal,
  removeRecipe,
  refetchRecipes,
  openEditRecipeModal,
}: Props) => {
  if (!recipe) return null

  const {
    id,
    poster,
    name,
    tags,
    description,

    ingredients,
    directions,

    calories,
    protein,
    carbohydrates,
    fat,
  } = recipe


  return  (
    <Modal
      title={`${name} Recipe`}
      visible={visible}
      onCancel={closeRecipeModal}
    >
      {
        poster
          ? <Poster alt='' src={poster.location} />
          : (
            <PosterPlaceholder>
              <FaImage size={20} />
            </PosterPlaceholder>
          )
      }

      <Typography.Title level={2}>{name}</Typography.Title>

      <Typography.Text type='secondary'>
        {calories || '-'} kcal • {carbohydrates || '-'} g Carbohydrates • {protein || '-'} g Protein • {fat || '-'} g Fat
      </Typography.Text>

      <TagsContainer>
        {tags.map((name, index) => <Tag key={index}>{name}</Tag>)}
      </TagsContainer>

      <Typography.Text>
        {description}
      </Typography.Text>

      <Divider />

      <Typography.Title level={3}>Ingredients</Typography.Title>

      <ul>
        {ingredients.map(({ name, unit, quantity }, index) => (
          <li key={index}>
            {quantity} {unit} {name}
          </li>
        ))}
      </ul>

      <Divider />

      <Typography.Title level={3}>Directions</Typography.Title>

      <ul>
        {directions.map((direction, index) => <li key={index}>{direction}</li>)}
      </ul>

      <Row gutter={20}>
        <Col md={12}>
          <Button
            block
            onClick={async () => {
              closeRecipeModal()
              openEditRecipeModal(id)
            }}
          >
            Edit Recipe
          </Button>
        </Col>

        <Col md={12}>
          <Button
            type='danger'
            block
            onClick={async () => {
              await removeRecipe(id)
              message.success('The recipe was removed!')
              refetchRecipes()
              closeRecipeModal()
            }}
          >
            Remove Recipe
          </Button>
        </Col>
      </Row>
    </Modal>
  )
}


export default graphql<any, RemoveRecipeResponse, RemoveRecipeVariables, any>(gql(RemoveRecipeMutation), {
  props: ({ mutate }) => ({
    removeRecipe: id => mutate({ variables: { id } }),
  }),
})(RecipeModal)
