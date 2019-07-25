type Action =
  | { type: 'toggleAddRecipeModal' }
  | { type: 'toggleEditRecipeModal', id: string | null }
  | { type: 'toggleRecipeModal', id: string | null }

interface State {
  addRecipeModalOpen: boolean
  editRecipeModalOpen: string | null
  recipeModalOpen: string | null
}


export const initialState = {
  addRecipeModalOpen: false,
  editRecipeModalOpen: null,
  recipeModalOpen: null,
}


const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'toggleAddRecipeModal':
      return { ...state, addRecipeModalOpen: !state.addRecipeModalOpen }
    case 'toggleEditRecipeModal':
      return { ...state, editRecipeModalOpen: action.id }
    case 'toggleRecipeModal':
      return { ...state, recipeModalOpen: action.id }
    default:
      throw new Error('Unexpected action.')
  }
}


export default reducer
