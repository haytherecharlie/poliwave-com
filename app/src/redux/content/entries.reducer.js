const initialContentState = {
  status: undefined,
  content: undefined
}

const contentReducer = (state = initialContentState, action) => {
  switch (action.base) {
    case 'ENTRIES':
      return {
        status: action.status,
        content: action.payload || undefined
      }
    default:
      return state
  }
}

export default contentReducer
