type Action =
  | { type: 'toggleAddRecipeModal' }
  | { type: 'toggleRecipeModal', id: string | null }

interface State {
  addRecipeModalOpen: boolean
  recipeModalOpen: string | null
}


export const initialState = {
  addRecipeModalOpen: false,
  recipeModalOpen: null,
}


const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'toggleAddRecipeModal':
      return { ...state, addRecipeModalOpen: !state.addRecipeModalOpen }
    case 'toggleRecipeModal':
      return { ...state, recipeModalOpen: action.id }
    default:
      throw new Error('Unexpected action.')
  }
}


export default reducer
