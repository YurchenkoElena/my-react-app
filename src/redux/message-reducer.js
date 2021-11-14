//create action type
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs : [
        {id: 1, name: 'John'},
        {id: 2, name: 'Maria'},
        {id: 3, name: 'Chester'},
        {id: 4, name: 'Alecia'},
        {id: 5, name: 'Apple'},
        {id: 6, name: 'Cucumber'},
        {id: 7, name: 'Freddy'}
    ],
    messages : [
        {id: 1, message: 'I am coughing and sneezing.'},
        {id: 2, message: 'It’s so nice to finally meet you face to face'},
        {id: 3, message: 'I’m sorry, I didn’t catch you.'},
        {id: 4, message: 'Never mind, forget what I just said'},
        {id: 5, message: 'How much per day should I take it? Take it 3 times a day before / after meals.'},
        {id: 6, message: 'I didn’t catch the last word.'},
        {id: 7, message: 'What have you been up to?'}
    ],
    newMessage: 'Add new message here'
}

const messageReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state, ///поверхностная копия
        //messages: [...state.messages],
    };

    switch (action.type) {
        case SEND_MESSAGE:
            let message = state.newMessage;
            return {
                ...state,
                newMessage: '',
                messages: [...state.messages, {id: 8, message: message}]
            }

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessage: action.newMessageBody
            }

        default:
            return stateCopy;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageActionCreator = (message) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageBody: message });

export default messageReducer;