type ActionsType = ReturnType<typeof setAuthData>
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
        isAuth: true,
      }
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