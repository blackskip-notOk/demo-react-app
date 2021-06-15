import { usersAPI } from "../../API/API"
import { updateObjectInArray } from "../../utils/object-helpers"
import { UsersActions } from "../../TypeScript/Actions/actionsTypes"
import { UsersActionsTypes, UsersThunk, UsersDispatch } from '../../TypeScript/Types';
import { IFollowSuccess, ISetRequestPage, ISetTotalCount, ISetUsers, IToggleIsFetching, IToggleIsFollowingProgress, IUnfollowSuccess, IUser } from "../../TypeScript/Interfaces/usersInterface";
import { ResultCode } from "../../TypeScript/Enums";

const initialState = {
    users:[] as IUser[],
    pageSize: 10,
    totalCount: 0,
    requestPage: 1,
    portionSize: 10,
    isFetching: false,
    followingInProgress: [] as number[] //Array of users ids
};
type UsersInitialState = typeof initialState

const usersReducer = (state = initialState, action: UsersActionsTypes): UsersInitialState => {
    switch (action.type) {
        case UsersActions.FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,
                    action.userId, 'id', {followed: true})
            };
        case UsersActions.UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,
                    action.userId, 'id', {followed: false})
            }
        case UsersActions.SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case UsersActions.SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case UsersActions.SET_REQUEST_PAGE:
            return {
                ...state,
                requestPage: action.currentPage
            }
        case UsersActions.TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,

            }
        case UsersActions.TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}
//action creators
export const followSuccess = (userId: number): IFollowSuccess => (
    {type: UsersActions.FOLLOW, userId})

export const unfollowSuccess = (userId: number): IUnfollowSuccess => (
    {type: UsersActions.UNFOLLOW, userId})

export const setUsers = (users: IUser[]): ISetUsers => (
    {type: UsersActions.SET_USERS, users})

export const setTotalCount = (totalCount: number): ISetTotalCount => (
    {type: UsersActions.SET_TOTAL_COUNT, totalCount})

export const setRequestPage = (currentPage: number): ISetRequestPage => (
    {type: UsersActions.SET_REQUEST_PAGE, currentPage})

export const toggleIsFetching = (isFetching: boolean): IToggleIsFetching => (
    {type: UsersActions.TOGGLE_IS_FETCHING, isFetching})

export const toggleIsFollowingProgress = (followingInProgress: boolean,
    userId: number): IToggleIsFollowingProgress => ({
        type: UsersActions.TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId})
//thunk creators
export const requestUsers  = (currentPage: number, pageSize: number): UsersThunk => async dispatch => {
    dispatch(toggleIsFetching(true))
    dispatch(setRequestPage(currentPage))

    const response = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalCount(response.totalCount))
}

const followUnfollowFlow = async (dispatch: UsersDispatch, userId: number, apiMethod: any,
    actionCreator: (userId: number) => IFollowSuccess | IUnfollowSuccess) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.resultCode === ResultCode.Success) {
        dispatch(actionCreator(userId))
    };

    dispatch(toggleIsFollowingProgress(false, userId))
}

export const follow = (userId: number): UsersThunk => async dispatch => {
    followUnfollowFlow(dispatch, userId,
        usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow  = (userId: number): UsersThunk => async dispatch => {
    followUnfollowFlow(dispatch, userId,
        usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}

export default usersReducer