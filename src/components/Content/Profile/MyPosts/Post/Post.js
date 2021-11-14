import React from "react";

const Post = (props) => {
    return (
        <div className="post-item">
            <h4 className="post-title"> {props.postTitle}</h4>
            <div className="post-body"> {props.postBody}</div>
            <span className="post-like fa fa-heart">{props.likeCount}</span>
        </div>
    );
}

export default Post;