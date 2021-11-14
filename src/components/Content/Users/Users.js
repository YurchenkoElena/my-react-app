import React from "react";
import axios from "axios";

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length <= 3) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                console.log(response.data.items);
            });
            props.setUsers(
                [
                    {id: 4, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551514947_48.jpg', followed: true, fullName: 'Joseph Marshall',
                        status: 'Every bullet has its bille.',
                        location: {city: 'Boston', country: 'USA' } },
                    {id: 5, photoUrl: 'https://klike.net/uploads/posts/2019-03/medium/1551514037_30.jpg', followed: false, fullName: 'Elisabeth Adams',
                        status: 'If you can dream it, you can do it.',
                        location: {city: 'Oslo', country: 'Kongeriket Norge' } },
                    {id: 6, photoUrl: 'http://andrey-eltsov.ru/wp-content/uploads/2017/09/ghjunyhgfg87654kjngvd-bkmijrfd04532lkijtgr-hbedkuj73982jhbgvf-a-a-kotik-edinorozhek-edinorog-ava2ap.jpg', followed: true, fullName: 'Janis Phelps',
                        status: 'To love is not to look at one another, but to look in the same direction.',
                        location: {city: 'Mexico', country: 'Mexica' } },
                ]
            );
        }
    }

    return <div className="users-list">
        {
            props.users.map(u => <div className="user-item" key={u.id}>
                <div className="for-border">
                    <div className="img-and-button">
                        <div className="avatar-user">
                            <img src={u.photoUrl} alt="main-avatar"/>
                        </div>
                        <div>
                            <button onClick={ () => {props.togglefollow(u.id)} }>{u.followed ? 'Unfollow' : 'Follow'}</button>
                            {/*{ u.followed*/}
                            {/*    ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>*/}
                            {/*    : <button onClick={ () => {props.follow(u.id)} }>Follow</button> }*/}
                        </div>
                    </div>
                    <div className="user-info">
                        <span>
                            <h3>{u.fullName}</h3>
                            <div>{u.status}</div>
                        </span>
                        <div className="location">
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                </div>
            </div>)
        }
        {props.users.length <= 3 ? <button className="add-users" onClick={getUsers}> Get users</button> : ''}
    </div>
}

export default Users;