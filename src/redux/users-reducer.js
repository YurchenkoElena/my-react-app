//create action type
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

///uploads/posts/2019-03/1551514947_48.jpg
///uploads/posts/2019-03/medium/1551514037_30.jpg
//http://andrey-eltsov.ru/wp-content/uploads/2017/09/ghjunyhgfg87654kjngvd-bkmijrfd04532lkijtgr-hbedkuj73982jhbgvf-a-a-kotik-edinorozhek-edinorog-ava2ap.jpg

let initialState = {
    users : [
    //     {id: 1, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551514025_2.jpg', followed: false, name: 'Christopher Barker',
    //         status: 'Before you judge me, Make sure that you’re perfect.',
    //         location: {city: 'New York', country: 'USA' } },
    //     {id: 2, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551514049_4.jpg', followed: false, name: 'Edward Johnston',
    //         status: 'It takes a minute to like someone, an hour to love someone, but to forget someone takes a lifetimes.',
    //         location: {city: 'Brussels', country: 'Belgium' } },
    //     {id: 3, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551514082_8.jpeg', followed: true, name: 'Janis Phelps',
    //         status: 'No one stays with you permanently so learn to survive alone.',
    //         location: {city: 'Lisbon', country: 'Portugal' } },
    ],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
           return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true }
                    }
                    return u;
                }) //users: [...state.users]
            }
        }
        case UNFOLLOW: {
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false }
                    }
                    return u;
                }) //users: [...state.users]
            }
        }
        case TOGGLE_FOLLOW: {
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed }
                    }
                    return u;
                })
            }
        }
        case SETUSERS: {
            return  {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return  {
                ...state,
                totalUsersCount: action.count
            }
        }

        default:
            return state;
    }
}

//action creators
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({type: SETUSERS, users});
export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId });
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, count: totalCount });

export default usersReducer;