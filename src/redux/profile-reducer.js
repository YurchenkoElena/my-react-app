//create action type
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts : [
        {id: 1, postTitle: 'Will Blog Idea Ever Rule the World?', postBody: '32 Of The Top All Things In The World Twitter Accounts', likeCount: '20'},
        {id: 2, postTitle: 'What Jay Leno would say about All Things In The World', postBody: 'WebFX has been a pleasure to work with on our SEO needs and I look forward to working with them on future projects.', likeCount: '5'},
        {id: 3, postTitle: 'Essential Tips for All Things In The World', postBody: 'Ready to grow with a digital marketing agency you can trust? ', likeCount: '11'},
    ],
    newPostText : 'Add new post here'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 4, postTitle: 'Title of user\'s post', postBody: state.newPostText, likeCount: '3'}],
                newPostText: ''
            };
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push({id: 4, postTitle: 'Title of user\'s post', postBody: state.newPostText, likeCount: '3'});
            // //state.posts.push({id: 4, postTitle: 'Title of user\'s post', postBody: state.newPostText, likeCount: '3'});
            // stateCopy.newPostText = '';
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

//action creators
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;