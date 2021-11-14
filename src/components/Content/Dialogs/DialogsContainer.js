// import React from "react";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/message-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

// ///было сделано руками ....................
// const DialogsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().messagesPage;
//
//                     let addNewMessage = () => {
//                         store.dispatch(sendMessageActionCreator());
//                     }
//
//                     let changeMessage = (message) => {
//                         store.dispatch(updateNewMessageActionCreator(message));
//                     }
//
//                     return <Dialogs addNewMessage={addNewMessage} changeMessage={changeMessage} messagesPage={state} />
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }
//
// export default DialogsContainer;

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => { dispatch(sendMessageActionCreator()) },
        changeMessage: (message) => { dispatch(updateNewMessageActionCreator(message)) }
    }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default SuperDialogsContainer;
