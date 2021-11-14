import {combineReducers, createStore} from "redux";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

export default store;