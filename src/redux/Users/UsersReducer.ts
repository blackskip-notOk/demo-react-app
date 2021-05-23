import { usersAPI } from "../../API/API";
import { PhotosType } from "../../Types/Types";
import { updateObjectInArray } from "../../utils/object-helpers";
import { Actions, FOLLOW, SET_TOTAL_COUNT, SET_USERS,
    TOGGLE_IS_FETCHING, TOGGLE_IS_FOLLOWING_PROGRESS, UNFOLLOW } from "../Actions/actionsTypes";

type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
const initialState = {
    users:[] as Array<UserType>,
    pageSize: 10,
    totalCount: 0,
    requestPage: 1,
    portionSize: 10,
    isFetching: false,
    followingInProgress: [] as Array<number> //Array of users ids
};
export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
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

        case Actions.SET_REQUEST_PAGE:
            return {
                ...state,
                requestPage: action.currentPage
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
type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW, userId})

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userId})

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})

type SetTotalCountActionType = {
    type: typeof SET_TOTAL_COUNT
    totalCount: number
}
export const setTotalCount = (totalCount: number): SetTotalCountActionType => ({type: SET_TOTAL_COUNT, totalCount})

type SetRequestPageActionType = {
    type: typeof Actions.SET_REQUEST_PAGE
    currentPage: number
}
export const setRequestPage = (currentPage: number): SetRequestPageActionType => ({type: Actions.SET_REQUEST_PAGE, currentPage})

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})

type ToggleIsFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    followingInProgress: boolean
    userId: number
}
export const toggleIsFollowingProgress = (followingInProgress: boolean, userId: number): ToggleIsFollowingProgressActionType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId});
//thunk creators
export const requestUsers  = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setRequestPage(currentPage));

    let response = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalCount(response.totalCount));
};

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let response = await apiMethod(userId);

    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    };

    dispatch(toggleIsFollowingProgress(false, userId));
};

export const follow  = (userId: number) => async (dispatch: any) => {
    followUnfollowFlow(dispatch, userId,
        usersAPI.follow.bind(usersAPI), followSuccess);
};

export const unfollow  = (userId: number) => async (dispatch: any) => {
    followUnfollowFlow(dispatch, userId,
        usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
};


export default usersReducer;