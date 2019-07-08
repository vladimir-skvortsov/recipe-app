import { createStore } from 'redux'

import enhancer from '@shared/utils/enhancer/enhancer'
import reducer from '@shared/utils/reducer/reducer'

const initialState = window.__REDUX_STATE__ || {}
const store = createStore(reducer, initialState, enhancer)


delete window.__REDUX_STATE__


export default store