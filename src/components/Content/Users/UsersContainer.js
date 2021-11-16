import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFollowAC,
    unfollowAC
} from "../../../redux/users-reducer";
// import UsersC from "./UsersC";
// import Users from "./Users";
// import UsersWithOwnApi from "./UsersWithOwnApi";
import axios from "axios";

import UsersLast from "./UsersLast";
import Preloader from "../../Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length <= 3) {
            axios.get(`http://localhost:3004/users-api`).then(response => {
                this.props.toggleIsFetching(false);
                let fiveUsers = response.data.items.slice(0, 5);
                this.props.setUsers(fiveUsers);
                this.props.setTotalUsersCount(response.data.items.length);
            });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        axios.get(`http://localhost:3004/users-api`)
            .then(response => {
                this.props.toggleIsFetching(false);
                let page = (pageNumber * 5) - 5;
                let fiveUsers = response.data.items.slice(page, page+5);
                this.props.setUsers(fiveUsers);

            });
    }

    render() {
        return  <>
                {this.props.isFetching ? <Preloader /> : null}
                 <UsersLast totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           users={this.props.users}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged}
                           togglefollow={this.props.togglefollow}/>
                </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         togglefollow: (userId) => {
//             dispatch(toggleFollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default connect(mapStateToProps, { follow: followAC,
                                                           unfollow: unfollowAC,
                                                           togglefollow: toggleFollowAC,
                                                           setUsers: setUsersAC,
                                                           setCurrentPage: setCurrentPageAC,
                                                           setTotalUsersCount: setTotalUsersCountAC,
                                                           toggleIsFetching: setIsFetchingAC } )(UsersContainer);