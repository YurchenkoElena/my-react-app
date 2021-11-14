import React from "react";
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
//import store from "./redux/store";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
// import StoreContext from "./StoreContext";

// let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                {/*<StoreContext.Provider value={store}>  -  писали взаимодействие реакт - редакс вручную  */}
                {/*    /!*<App appState={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />*!/*/}
                {/*    <App />*/}
                {/*</StoreContext.Provider>*/}
                <Provider store={store}>
                    <App />
                </Provider>
                {/*<App appState={state} addPost= { (message) => {alert('This is only text in textarea : ' + message)}}/>*/}
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
// }

// rerenderEntireTree(store.getState());
//
// store.subscribe(() => {
//     rerenderEntireTree(store.getState());
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
