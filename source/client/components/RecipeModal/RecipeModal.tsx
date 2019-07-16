import React from 'react'
import { Modal, Typography, Tag, Divider, Button } from 'antd'
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
}


const RecipeModal = ({
  visible,
  recipe,

  closeRecipeModal,
  removeRecipe,
  refetchRecipes,
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
      title={name}
      visible={visible}
      onCancel={closeRecipeModal}
    >
      {
        poster
          ? <Poster alt='' src={poster} />
          : (
            <PosterPlaceholder>
              <FaImage size={20} />
            </PosterPlaceholder>
          )
      }

      <Typography.Title level={2}>{name}</Typography.Title>

      <Typography.Text type='secondary'>
        {calories} kcal • {carbohydrates} g Carbohydrates • {protein} g Protein • {fat} g Fat
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

      <Button
        type='danger'
        block
        onClick={async () => {
          await removeRecipe(id)
          refetchRecipes()
          closeRecipeModal()
        }}
      >
        Remove Recipe
      </Button>
    </Modal>
  )
}


export default graphql<any, RemoveRecipeResponse, RemoveRecipeVariables, any>(gql(RemoveRecipeMutation), {
  props: ({ mutate }) => ({
    removeRecipe: id => mutate({ variables: { id } }),
  }),
})(RecipeModal)
