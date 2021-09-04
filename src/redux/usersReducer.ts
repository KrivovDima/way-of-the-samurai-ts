import {actionsType} from "./profileReducer";

const CHANGE_TO_FOLLOW = 'CHANGE-TO-FOLLOW';
const CHANGE_TO_UNFOLLOW = 'CHANGE-TO-UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const CHANGE_FETCH_STATUS = 'CHANGE-FETCH-STATUS';

export type userType = {
  id: number
  followed: boolean
  photos: { small: null | string, large: null | string }
  name: string
  status: string
  location: { city: string, country: string }
}
export type UsersPageStateType = {
  users: Array<userType>
  countUsers: number
  totalCount: number
  currentPage: number
  isFetch: boolean
}

const initialState: UsersPageStateType = {
  users: [],
  countUsers: 5,
  currentPage: 1,
  totalCount: 0,
  isFetch: false,
}

export const usersReducer = (state: UsersPageStateType = initialState, action: actionsType): UsersPageStateType => {
  switch (action.type) {
    case CHANGE_TO_FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
      }
    }
    case CHANGE_TO_UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
      }
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users]
      }
    }
    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalCount: action.totalCount,
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      }
    }
    case CHANGE_FETCH_STATUS: {
      return {
        ...state,
        isFetch: action.value,
      }
    }
    default: {
      return state
    }
  }
}

export const changeToFollow = (userID: number) => {
  return {
    type: CHANGE_TO_FOLLOW,
    userID
  } as const
}

export const changeToUnfollow = (userID: number) => {
  return {
    type: CHANGE_TO_UNFOLLOW,
    userID
  } as const
}

export const setUsers = (users: Array<userType>) => {
  return {
    type: SET_USERS,
    users,
  } as const
}

export const setTotalCount = (totalCount: number) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount,
  } as const
}

export const setCurrentPage = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  } as const
}

export const changeFetchStatus = (value: boolean) => {
  return {
    type: CHANGE_FETCH_STATUS,
    value,
  } as const
}