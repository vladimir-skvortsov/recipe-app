import React from 'react'
import { Card, Tag } from 'antd'
import { FaImage } from 'react-icons/fa'

import Recipe from '@client/types/Recipe'

import { Poster, PosterPlaceholder, TagsContainer } from './RecipeCard.styles'


export interface Props extends Omit<Recipe, 'description' | 'directions' | 'ingredients'> {
  toggleRecipeModal: (id: string) => any
}


const RecipeCard = ({
  id,
  poster,
  name,
  tags,

  calories,
  protein,
  carbohydrates,
  fat,

  toggleRecipeModal,
}: Props) =>
  <Card
    hoverable
    cover={
      poster
        ? <Poster alt='' src={poster} />
        : (
          <PosterPlaceholder>
            <FaImage size={20} />
          </PosterPlaceholder>
        )
    }
    onClick={() => toggleRecipeModal(id)}
  >
    <Card.Meta
      title={name}
      description={`${calories} kcal • ${carbohydrates} g Carbohydrates • ${protein} g Protein • ${fat} g Fat`}
    />
    <TagsContainer>
      {tags.map((name, index) => <Tag key={index}>{name}</Tag>)}
    </TagsContainer>
  </Card>


export default RecipeCard
