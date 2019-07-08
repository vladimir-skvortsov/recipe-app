import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


const enhancer = composeWithDevTools(applyMiddleware())


export default enhancer