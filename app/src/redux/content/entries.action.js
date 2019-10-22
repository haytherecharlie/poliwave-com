import { getAllEntries } from 'utils/contentful'

const ENTRIES_LOADING = {
  type: 'ENTRIES_LOADING',
  value: 'loading'
}
const ENTRIES_FAILED = {
  type: 'ENTRIES_FAILED',
  value: 'failed'
}

export const createAddEntries = async dispatch => {
  dispatch(ENTRIES_LOADING)
  try {
    const entries = await getAllEntries()
    return dispatch({
      type: 'ENTRIES_SUCCESS',
      value: 'success',
      payload: entries
    })
  } catch (err) {
    return dispatch(ENTRIES_FAILED)
  }
}
