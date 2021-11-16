import {combineReducers, createStore} from "redux";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import clockReducer from "./clock-reducer";
import citeReducer from "./cite-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    clock: clockReducer,
    cites: citeReducer
})

let store = createStore(reducers);

window.store = store;

export default store;