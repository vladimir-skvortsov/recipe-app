import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'

import Header from '@client/components/Header/Header'


storiesOf('Header', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>
      {story()}
    </MemoryRouter>
  ))
  .add('Default', () => <Header openRecipeModal={action('Open Recipe Modal')} />)
