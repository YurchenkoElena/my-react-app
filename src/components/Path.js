import {useRoutes} from "react-router-dom";
// import Profile from "./Content/Profile/Profile";
import DialogsContainer from "./Content/Dialogs/DialogsContainer";
import Settings from "./Content/Settings/Settings";
import React from "react";
// import Users from "./Content/Users/Users";
import UsersContainer from "./Content/Users/UsersContainer";
import ProfileContainer from "./Content/Profile/ProfileContainer";

const Paths = (props) => {
   // return useRoutes([
   //      {path: "/profile", element: <ProfileContainer store={props.store} /> },
   //      {path: "/messages", element: <DialogsContainer store={props.store} />},
   //      {path: "/settings", element: <Settings />},
   //      {path: "/users", element: <UsersContainer />}
   //  ]);
};

export default Paths;