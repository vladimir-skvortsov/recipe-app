import React from 'react'
import { Card, Tag } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { FaImage } from 'react-icons/fa'

import { Poster, PosterPlaceholder, TagsContainer } from './RecipeCard.styles'


export interface Props extends RouteComponentProps {
  id: number
  poster?: string
  name: string
  tags: string[]
}


const RecipeCard = ({
  id,
  poster,
  name,
  tags,

  history: { push },
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
    onClick={() => push(`/recipe/${id}`)}
  >
    <Card.Meta title={name} />
    <TagsContainer>
      {tags.map((name, index) => <Tag key={index}>{name}</Tag>)}
    </TagsContainer>
  </Card>


export default withRouter(RecipeCard)
