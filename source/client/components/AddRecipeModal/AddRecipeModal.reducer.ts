type Action =
  | { type: 'closeTag', tag: string }
  | { type: 'showInput' }
  | { type: 'confirmInput', tag?: string }

interface State {
  tags: string[]
  inputVisible: boolean
}


export const initialState = { tags: [], inputVisible: false }


const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'closeTag':
      return { ...state, tags: state.tags.filter(tag => tag !== action.tag) }
    case 'showInput':
      return { ...state, inputVisible: true }
    case 'confirmInput':
      let tag = action.tag
      if (!tag) return { ...state, inputVisible: false }
      tag = tag.trim()

      const { tags } = state
      let newTags = tags

      if (tag && tags.indexOf(tag) === -1) newTags = [...tags, tag]

      return { ...state, inputVisible: false, tags: newTags }

    default:
      throw new Error('Unexpected action.')
  }
}


export default reducer
