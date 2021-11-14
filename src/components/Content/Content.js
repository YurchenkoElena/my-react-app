import React from "react";
import Aside from "./Aside/Aside";
import Paths from "../Path";

const Content = (props) => {
    return (
        <main className="main-content container">
            <Aside />
            <div className="wrapper-content">

                <Paths store={props.store} />

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
