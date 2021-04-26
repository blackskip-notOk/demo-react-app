import { createSelector } from 'reselect';

const getUsersSelector = (state) => {
    return state.users.users
}

export const getIsFetching = (state) => {
    return state.users.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.users.followingInProgress;
}

export const getUsers = createSelector(getUsersSelector, getIsFetching, (users, isFetching) => {
    return users.filter(u => true);
});

export const getPagesInfo = state => {
    const pageSize = state.users.pageSize;
    const totalCount = state.users.totalCount;
    const currentPage = state.users.currentPage;
    const pages = [];
    const pagesCount = Math.ceil(totalCount / pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const portionSize = state.users.portionSize
    const portionCount = Math.ceil(pagesCount / portionSize);
    return {pageSize, currentPage, pages, portionCount, portionSize};
}