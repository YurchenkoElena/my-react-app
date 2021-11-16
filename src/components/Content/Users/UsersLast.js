import React from "react";
import userPhoto from "./../../../images/Union.jpg"
import {NavLink} from "react-router-dom";

const UsersLast = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for(let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className="users-list">
            <div className="list-pagination">
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? "selected" : undefined}
                                 onClick={ (e) => {props.onPageChanged(p)} }>{p}</span>
                })}
            </div>


            {props.users.map(user => <div className="user-item" key={user.id}>
                    <div className="for-border">
                        <div className="img-and-button">
                            <div className="avatar-user">
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photoUrl || user.photos.small ? user.photos.small : userPhoto} alt="main-avatar"/>
                                </NavLink>
                            </div>
                            <div>
                                <button onClick={ () => {props.togglefollow(user.id)} }>{user.followed ? 'Unfollow' : 'Follow'}</button>
                            </div>
                        </div>
                        <div className="user-info">
                                <span>
                                    <h3>{user.name}</h3>
                                    <div className="status">{user.status}</div>
                                </span>
                            <div className="location">
                                <div>u.location.country</div>
                                <div>u.location.city</div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            {props.users.length <= 3 ? <button className="add-users" onClick={props.getUsers}> Get users</button> : ''}
        </div>


}

export default UsersLast;