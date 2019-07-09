type Action =
  | { type: 'toggleModal', name: string, open: boolean }

interface State {
  modals: object
}


export const initialState = { modals: {} }


const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'toggleModal':
      return { ...state, modals: { ...state.modals, [action.name]: action.open } }
    default:
      throw new Error('Unexpected action.')
  }
}


export default reducer
