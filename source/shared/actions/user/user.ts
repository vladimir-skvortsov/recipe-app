import { SetUser, ResetUser, User } from '@shared/types/actions'


export const setUser = (payload: User): SetUser => ({ type: 'setUser', payload })

export const resetUser = (): ResetUser => ({ type: 'resetUser' })
