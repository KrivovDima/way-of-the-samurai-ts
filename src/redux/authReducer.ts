import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkType} from "./redux-store";

export type AuthActionsType = ReturnType<typeof setAuthData>
  | ReturnType<typeof logout>
  | ReturnType<typeof setErrorMessage>
export type AuthStateType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  errorMessage: string
}

const initialState: AuthStateType = {
  email: null,
  login: null,
  userId: null,
  isAuth: false,
  errorMessage: '',
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
  switch (action.type) {
    case "SET-AUTH-DATA": {
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    }
    case "LOGOUT": {
      return {...state, isAuth: false}
    }
    case "SET-ERROR-MESSAGE": {
      return {...state, errorMessage: action.errorMessage}
    }
    default: {
      return state
    }
  }
}

export const setAuthData = (userId: number, email: string, login: string) => {
  return {
    type: 'SET-AUTH-DATA',
    data: {userId, email, login}
  } as const
}
export const logout = () => ({type: 'LOGOUT'} as const)
export const setErrorMessage = (errorMessage: string) => ({type: 'SET-ERROR-MESSAGE', errorMessage} as const)

export const fetchAuthMe = () => (dispatch: Dispatch) => {
  debugger
  return authAPI.getAuthMe()
    .then(response => {
      if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data;
        dispatch(setAuthData(id, email, login));
        dispatch(setErrorMessage(''));
      }
    })
}
export const postLogin = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(fetchAuthMe())
      } else {
        res.data.messages.length ?
          dispatch(setErrorMessage(res.data.messages[0]))
          : dispatch(setErrorMessage('Some Error'))
      }
    })
}
export const postLogout = () => (dispatch: Dispatch) => {
  authAPI.logout()
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(logout())
      }
    })
}