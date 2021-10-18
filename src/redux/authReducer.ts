import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type ActionsType = ReturnType<typeof setAuthData>
  | ReturnType<typeof logout>
export type AuthStateType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

const initialState: AuthStateType = {
  email: null,
  login: null,
  userId: null,
  isAuth: false,
}

export const authReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
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

export const fetchAuthMe = () => (dispatch: Dispatch) => {
  authAPI.getAuthMe()
    .then(response => {
      if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data;
        dispatch(setAuthData(id, email, login));
      }
    })
}
export const postLogin = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(res => {
      if (res.data.resultCode === 0) {
        //@ts-ignore
        dispatch(fetchAuthMe())
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