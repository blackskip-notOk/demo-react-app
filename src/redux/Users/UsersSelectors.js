import { createSelector } from 'reselect';

export const getUsersSElector = (state) => {
    return state.users.users
}

export const getPageSize = (state) => {
    return state.users.pageSize;
}

export const getTotalCount = (state) => {
    return state.users.totalCount;
}

export const getCurrentPage = (state) => {
    return state.users.currentPage;
}

export const getIsFetching = (state) => {
    return state.users.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.users.followingInProgress;
}

export const getUsers = createSelector(getUsersSElector, getIsFetching, (users, isFetching) => {
    return users.filter(u => true);
});