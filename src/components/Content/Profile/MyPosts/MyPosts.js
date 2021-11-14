import React from "react";
import Post from "./Post/Post"

const MyPosts = (props) => {


    let arrayPosts = props.posts.map( p => <Post postTitle={p.postTitle} key={p.id} postBody={p.postBody} likeCount={p.likeCount} />);

    //так в реакте писать нельзя!!! нужно использовать VirtualDom
    // let addPost = () => {
    //     let text = document.getElementById('add-text').value;
    //     alert(text);
    // }

    let newPostElement = React.createRef();

    let addNewPost =() => {
        //let text = newPostElement.current.value;
        props.addPost();
        //newPostElement.current.value = ''; - не имеем права занулять на стороне UI
        //alert(text);
        //props.dispatch({type: 'ADD-POST'})
        //props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text);
        //props.dispatch(updateNewPostActionCreator(text));
        //console.log(text);
    }

    return (
        <div className="main-profile-posts">
            {/*{console.log(props.posts)}*/}
            <h3> My posts </h3>
            <div className="post-actions">
                <textarea  onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <button onClick={ addNewPost }>Add post</button>
            </div>
            {arrayPosts}
        </div>
    );
}

export default MyPosts;