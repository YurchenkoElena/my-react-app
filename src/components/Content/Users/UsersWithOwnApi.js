import React from "react";
import axios from "axios";
import userPhoto from "./../../../images/Union.jpg"

class UsersC extends React.Component {

    componentDidMount() {
        //alert('componentDidMount - !!!');
        if (this.props.users.length <= 3) {
            axios.get(`http://localhost:3004/users-api`).then(response => {
                let newArray = response.data.items.splice(0, 5);
                    this.props.setUsers(newArray);
                    this.props.setTotalUsersCount(response.data.items.length);
            });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        axios.get(`http://localhost:3004/users-api?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                let page = (5 * pageNumber) - 5;
                let newArray = response.data.items.splice(page, 5);
                    this.props.setUsers(newArray);
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