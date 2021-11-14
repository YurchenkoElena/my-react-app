import React from "react";
import axios from "axios";
import userPhoto from "./../../../images/Union.jpg"

class UsersC extends React.Component {

    // getUsers = () => {
    //     if (this.props.users.length <= 3) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             console.log(response.data.items);
    //         });
    //         this.props.setUsers(
    //             [
    //                 {id: 4, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551514947_48.jpg', followed: true, fullName: 'Joseph Marshall',
    //                     status: 'Every bullet has its bille.',
    //                     location: {city: 'Boston', country: 'USA' } },
    //                 {id: 5, photoUrl: 'https://klike.net/uploads/posts/2019-03/medium/1551514037_30.jpg', followed: false, fullName: 'Elisabeth Adams',
    //                     status: 'If you can dream it, you can do it.',
    //                     location: {city: 'Oslo', country: 'Kongeriket Norge' } },
    //                 {id: 6, photoUrl: 'http://andrey-eltsov.ru/wp-content/uploads/2017/09/ghjunyhgfg87654kjngvd-bkmijrfd04532lkijtgr-hbedkuj73982jhbgvf-a-a-kotik-edinorozhek-edinorog-ava2ap.jpg', followed: true, fullName: 'Janis Phelps',
    //                     status: 'To love is not to look at one another, but to look in the same direction.',
    //                     location: {city: 'Mexico', country: 'Mexica' } },
    //             ]
    //         );
    //     }
    // }

    componentDidMount() {
        //alert('componentDidMount - !!!');
        if (this.props.users.length <= 3) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
            });

            // this.props.setUsers(
            //     [
            //         {id: 4, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551514947_48.jpg', followed: true, name: 'Joseph Marshall',
            //             status: 'Every bullet has its bille.',
            //             location: {city: 'Boston', country: 'USA' } },
            //         {id: 5, photoUrl: 'https://klike.net/uploads/posts/2019-03/medium/1551514037_30.jpg', followed: false, name: 'Elisabeth Adams',
            //             status: 'If you can dream it, you can do it.',
            //             location: {city: 'Oslo', country: 'Kongeriket Norge' } },
            //         {id: 6, photoUrl: 'http://andrey-eltsov.ru/wp-content/uploads/2017/09/ghjunyhgfg87654kjngvd-bkmijrfd04532lkijtgr-hbedkuj73982jhbgvf-a-a-kotik-edinorozhek-edinorog-ava2ap.jpg', followed: true, name: 'Janis Phelps',
            //             status: 'To love is not to look at one another, but to look in the same direction.',
            //             location: {city: 'Mexico', country: 'Mexica' } },
            //     ]
            // );
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for(let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div className="users-list">
                <div className="list-pagination">
                    {pages.map(p => {
                        return <span key={p} className={this.props.currentPage === p ? "selected" : undefined}
                                onClick={ (e) => {this.onPageChanged(p)} }>{p}</span>
                    })}
                </div>
                
                {/*<div className="list-pagination">*/}
                {/*     <span className="pag-number">1</span>*/}
                {/*     <span className="pag-number ">2</span>*/}
                {/*     <span className="pag-number">3</span>*/}
                {/*     <span className="pag-number">4</span>*/}
                {/*     <span className="pag-number">5</span>*/}
                {/*</div>*/}
                {
                    this.props.users.map(u => <div className="user-item" key={u.id}>
                        <div className="for-border">
                            <div className="img-and-button">
                                <div className="avatar-user">
                                    <img src={u.photoUrl || u.photos.small ? u.photos.small : userPhoto} alt="main-avatar"/>
                                </div>
                                <div>
                                    <button onClick={ () => {this.props.togglefollow(u.id)} }>{u.followed ? 'Unfollow' : 'Follow'}</button>
                                </div>
                            </div>
                            <div className="user-info">
                                <span>
                                    <h3>{u.name}</h3>
                                    <div className="status">{u.status}</div>
                                </span>
                                <div className="location">
                                    <div>u.location.country</div>
                                    <div>u.location.city</div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
                {this.props.users.length <= 3 ? <button className="add-users" onClick={this.getUsers}> Get users</button> : ''}
            </div>
        );
    }

}

export default UsersC;