import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, text, array } from '@storybook/addon-knobs'
import { MemoryRouter } from 'react-router-dom'

import RecipeCard from './RecipeCard'


storiesOf('RecipeCard', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add(
    'Default',
    () =>
      <RecipeCard
        id={number('id', 42)}
        poster={text('Poster', undefined)}
        name={text('Name', '')}
        tags={array('Tags', [])}
      />,
  )
