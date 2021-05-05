import { usersAPI } from "../../API/API";
import { updateObjectInArray } from "../../utils/object-helpers";
import { FOLLOW, SET_CURRENT_PAGE, SET_TOTAL_COUNT, SET_USERS,
    TOGGLE_IS_FETCHING, TOGGLE_IS_FOLLOWING_PROGRESS, UNFOLLOW } from "../Actions/actionsTypes";

let initialState = {
    users:[],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    portionSize: 10,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,
                    action.userId, 'id', {followed: true})
            };

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,
                    action.userId, 'id', {followed: false})
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,

            };

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state;
    }
};
//action creators
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (followingInProgress, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId});
//thunk creators
export const requestUsers  = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let response = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalCount(response.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let response = await apiMethod(userId);

    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    };

    dispatch(toggleIsFollowingProgress(false, userId));
};

export const follow  = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId,
        usersAPI.follow.bind(usersAPI), followSuccess);
};

export const unfollow  = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId,
        usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
};


export default usersReducer;