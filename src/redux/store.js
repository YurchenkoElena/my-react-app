//create action type
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts : [
                {id: 1, postTitle: 'Will Blog Idea Ever Rule the World?', postBody: '32 Of The Top All Things In The World Twitter Accounts', likeCount: '20'},
                {id: 2, postTitle: 'What Jay Leno would say about All Things In The World', postBody: 'WebFX has been a pleasure to work with on our SEO needs and I look forward to working with them on future projects.', likeCount: '5'},
                {id: 3, postTitle: 'Essential Tips for All Things In The World', postBody: 'Ready to grow with a digital marketing agency you can trust? ', likeCount: '11'},
            ],
            newPostText : 'Add new post here'
        },
        messagesPage: {
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
        },
        sidebarPage: {}
   },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
      return this._state;
    },
    addPost() { //функция добавляет новый пост на странице профайла
        let newPost = {
            id: 4,
            postTitle: 'Title of user\'s post',
            postBody: this._state.profilePage.newPostText,
            likeCount: '3'
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) { //функция обновляет значение в state, которое хочет ввести пользователь в поле введения текста для нового поста
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {  //паттерн
        this._callSubscriber = observer;
    },
    dispatch(action) { // { type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    }
}

window.state = store; //для доступа в консоли

export default store;
