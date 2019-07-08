import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  Home,
  SignUp,
  SignIn,
  NotFound,
} from '@client/components/Scenes/Scenes'


const Router = () =>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/sign-up' component={SignUp} />
    <Route exact path='/sign-in' component={SignIn} />
    <Route component={NotFound} />
  </Switch>


export default Router