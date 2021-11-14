// import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
// import StoreContext from "../../../../StoreContext";
// import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../../../redux/message-reducer";
import {connect} from "react-redux";
// import Dialogs from "../../Dialogs/Dialogs";

// const MyPostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {   // обязательно эти скобки должны быть на след. строке
//                 (store) => {
//                     let state = store.getState().profilePage;
//
//                     let addNewPost =() => {
//                         store.dispatch(addPostActionCreator());
//                     }
//
//                     let onPostChange = (text) => {
//                         store.dispatch(updateNewPostActionCreator(text));
//                     }
//
//                     return <MyPosts updateNewPost={onPostChange} addPost={addNewPost} posts={state.posts}
//                                     newPostText={state.newPostText}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }
//
// export default MyPostsContainer;

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => { dispatch(addPostActionCreator()) },
        updateNewPost: (text) => { dispatch(updateNewPostActionCreator(text)) }
    }
}

const SuperPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default SuperPostsContainer;