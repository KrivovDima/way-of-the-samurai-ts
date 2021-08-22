import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

export type StateType = ReturnType<typeof rootReducer>
export type storeType = typeof store

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
})

const store = createStore(rootReducer);

export default store;