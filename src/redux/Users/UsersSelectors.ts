import { AppState } from './../redux-store'
import { createSelector } from 'reselect'

export const getIsFetching = (state: AppState) => {
    return state.users.isFetching
}
export const getUsers = (state: AppState) => state.users.users

export const getFollowingInProgress = (state: AppState) => state.users.followingInProgress
//simple selectors
const getPageSize = (state: AppState) => state.users.pageSize
const getTotalCount = (state: AppState) => state.users.totalCount
const getRequestPage = (state: AppState) => state.users.requestPage
const getPortionSize = (state: AppState) => state.users.portionSize
//created selectors
const getPagesCount = createSelector(
    getTotalCount, getPageSize, (totalCount, pageSize) => {
    return Math.ceil(totalCount / pageSize)
})

const getPortionCount = createSelector(
    getPagesCount, getPortionSize, (pagesCount, portionSize) => {
    return Math.ceil(pagesCount / portionSize)
})

export const getPagesInfo = createSelector(
    getPagesCount, getPageSize, getRequestPage, getPortionCount, getPortionSize,
    (pagesCount, pageSize, requestPage, portionCount, portionSize) => {
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return {pageSize, requestPage, pages, portionCount,
        portionSize}
})