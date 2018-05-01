import { handleActions, createAction } from 'redux-actions'
import { createNamedWrapperReducer } from './utils'

const prefix = 'fetch'

export const types = {
  STARTED: `${prefix}/STARTED`,
  SUCCESS: `${prefix}/SUCCESS`,
  FAILURE: `${prefix}/FAILURE`,
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
