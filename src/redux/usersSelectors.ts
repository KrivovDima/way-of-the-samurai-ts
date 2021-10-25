import {StateType} from "./redux-store";

export const gettingUsers = (state: StateType) => {
  return state.usersPage.users;
}
export const getCountUsers = (state: StateType) => {
  return state.usersPage.countUsers;
}
export const getCurrentPage = (state: StateType) => {
  return state.usersPage.currentPage;
}
export const getTotalCountUsers = (state: StateType) => {
  return state.usersPage.totalCount;
}
export const getIsFetch = (state: StateType) => {
  return state.usersPage.isFetch;
}
export const getSubscribeProgressUserId = (state: StateType) => {
  return state.usersPage.subscribeProgressUserId;
}
