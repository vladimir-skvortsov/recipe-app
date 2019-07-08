import { SetUser, ResetUser } from '@shared/types/actions'


type Action = SetUser | ResetUser


const userReducer = (state = null, action: Action) => {
  switch (action.type) {
    case 'setUser': return action.payload
    case 'resetUser': return null
    default: return state
  }
}


export default userReducer
