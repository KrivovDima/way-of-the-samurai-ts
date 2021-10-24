import {ThunkType} from "./redux-store";
import {fetchAuthMe} from "./authReducer";

type AppReducerStateType = {
  initialized: boolean
}
export type AppReducerActionsType = ReturnType<typeof changeInitialize>

const initialState: AppReducerStateType = {
  initialized: false
}

export const appReducer = (state: AppReducerStateType = initialState, action: AppReducerActionsType): AppReducerStateType => {
  switch (action.type) {
    case "CHANGE-INITIALIZE": {
      return {...state, initialized: true}
    }
    default: {
      return state
    }
  }
}

const changeInitialize = () => ({type: 'CHANGE-INITIALIZE'} as const)

export const initialize = (): ThunkType => (dispatch) => {
  Promise.all([dispatch(fetchAuthMe())])
    .then(() => {
      dispatch(changeInitialize())
    })
}