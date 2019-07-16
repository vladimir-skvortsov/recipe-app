import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, text, array } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
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
        id={number('id', '42')}
        poster={text('Poster', undefined)}
        name={text('Name', 'Roasted Sweet Potatoes & Sprouts')}
        tags={array('Tags', [])}

        calories={number('calories', 300)}
        protein={number('protein', 40)}
        carbohydrates={number('carbohydrates', 8)}
        fat={number('fat', 10)}

        toggleRecipeModal={action('Toggle Recipe Modal')}
      />,
  )
