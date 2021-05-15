import { createSelector } from 'reselect';
export const getIsFetching = (state) => {
    return state.users.isFetching;
}
export const getUsers = state => state.users.users;

export const getFollowingInProgress = state => state.users.followingInProgress;
//simple selectors
const getPageSize = state => state.users.pageSize;
const getTotalCount = state => state.users.totalCount;
const getCurrentPage = state => state.users.currentPage;
const getPortionSize = state => state.users.portionSize;
//created selectors
const getPagesCount = createSelector(
    getTotalCount, getPageSize, (totalCount, pageSize) => {
    return Math.ceil(totalCount / pageSize);
});

const getPortionCount = createSelector(
    getPagesCount, getPortionSize, (pagesCount, portionSize) => {
    return Math.ceil(pagesCount / portionSize);
});

export const getPagesInfo = createSelector(
    getPagesCount, getPageSize, getCurrentPage, getPortionCount, getPortionSize,
    (pagesCount, pageSize, currentPage, portionCount, portionSize) => {
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return {pageSize, currentPage, pages, portionCount,
        portionSize};
});