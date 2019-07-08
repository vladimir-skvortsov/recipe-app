import React from 'react'
import { addParameters , addDecorator, configure } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { withConsole } from '@storybook/addon-console'
import { ThemeProvider } from 'styled-components'

import theme from '@shared/data/theme'


const req = require.context('../source', true, /\.stories\.tsx$/)
const loadStories = () => req.keys().forEach(req)


addParameters({
  backgrounds: [
    { name: 'Light', value: '#fff', default: true },
    { name: 'Dark', value: '#111' },
    { name: 'Accent', value: '#CEFF8C' },
  ],
})

addDecorator(withInfo)
addDecorator(centered)
addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    {storyFn() as any}
  </ThemeProvider>
))

configure(loadStories, module)