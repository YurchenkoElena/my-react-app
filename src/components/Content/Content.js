import React from "react";
import Aside from "./Aside/Aside";
import Paths from "../Path";
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import ProfileContainer from "./Profile/ProfileContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import Settings from "./Settings/Settings";
import UsersContainer from "./Users/UsersContainer";

const Content = (props) => {
    return (
        <main className="main-content container">
            <Aside />
            <div className="wrapper-content">

                {/*<Paths store={props.store} />*/}

                <Route path='/profile' render={ () => <ProfileContainer store={props.store} /> } />
                <Route path='/messages' render={ () => <DialogsContainer store={props.store} /> } />
                <Route path='/settings' render={ () => <Settings /> } />
                <Route path='/users' render={ () => <UsersContainer /> } />

                {/*<Routes>*/}
                {/*    <Route path='/profile' component={Profile} />*/}
                {/*    <Route path='/messages' component={Dialogs} />*/}
                {/*</Routes>*/}

                {/*<Profile />*/}
                {/*<Dialogs />*/}

            </div>
        </main>
    )
}

export default Content;
