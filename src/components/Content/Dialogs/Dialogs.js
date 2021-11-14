import React from "react";
import DialogMember from "./DialogMember";
import MessageItem from "./MessageItem";
// import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/message-reducer";

const Dialogs = (props) => {
    // create components like <DialogMember name="User name" id="user id" />
    let arrayMembers = props.messagesPage.dialogs.map( d => <DialogMember name={d.name} id={d.id} key={d.id} />);
    let arrayMessages = props.messagesPage.messages.map( m => <MessageItem message={m.message} key={m.id} /> );

    let addNewMessage = () => {
        // let text = newMessage.current.value;
        // alert(text);
        //props.dispatch(sendMessageActionCreator());
        props.addNewMessage();
    }

    let changeMessage = (e) => {
        let message = e.target.value;
        //props.dispatch(updateNewMessageActionCreator(message));
        props.changeMessage(message);
    }


    return (
        <div className="dialogs-page">
            {/*{console.log({dialogsData})}*/}
            <div className="dialogs-items">
                {arrayMembers}
            </div>
            <div className="messages-block">
                {arrayMessages}
                <div className="new-message">
                    <textarea value={props.messagesPage.newMessage} onChange={changeMessage} />
                    <button onClick={addNewMessage}> Add message </button>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;