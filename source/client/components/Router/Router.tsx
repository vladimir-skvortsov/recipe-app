import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  Home,
  NotFound,
} from '@client/components/Scenes/Scenes'


const Router = () =>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route component={NotFound} />
  </Switch>


export default Router
