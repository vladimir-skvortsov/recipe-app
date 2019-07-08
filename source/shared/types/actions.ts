import { Action } from 'redux'


export interface User {
  name: string
  email: string
  avatar: string
  token: string
}

export interface SetUser extends Action {
  type: 'setUser'
  payload: User
}

export interface ResetUser extends Action {
  type: 'resetUser'
}
