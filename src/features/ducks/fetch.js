import { get } from 'lodash'

import { handleActions, createAction } from 'redux-actions'

const prefix = 'fetch'

export const types = {
  STARTED: `${prefix}/STARTED`,
  SUCCESS: `${prefix}/SUCCESS`,
  FAILURE: `${prefix}/FAILURE`,
}

export const createNamedWrapperReducer = (reducerFunction, reducerName) => (
  state,
  action
) => {
  const isInitializationCall = state === undefined
  const name = get(action, 'meta.name')
  if (name !== reducerName && !isInitializationCall) return state

  return reducerFunction(state, action)
}

const fetchReducer = handleActions(
  {
    [types.STARTED]: state => ({
      ...state,
      isFetching: true,
      isFetched: false,
    }),
    [types.SUCCESS]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      payload,
    }),
    [types.FAILURE]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      errorMessage: payload,
    }),
  },
  {
    isFetching: false,
    isFetched: false,
    payload: null,
    errorMessage: null,
  }
)

const getFetchReducer = name => createNamedWrapperReducer(fetchReducer, name)
export default getFetchReducer

export const getFetchActions = name => ({
  started: createAction(types.STARTED, undefined, () => ({ name })),
  success: createAction(types.SUCCESS, undefined, () => ({
    name,
  })),
  failure: createAction(types.FAILURE, undefined, () => ({
    name,
  })),
})
