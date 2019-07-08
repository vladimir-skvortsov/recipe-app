import { combineReducers } from 'redux'

import user from '@shared/reducers/user/user'


const reducer = combineReducers({
  user,
})


export default reducer
