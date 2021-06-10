import { AppState } from './../redux-store'
import { createSelector } from 'reselect'

//simple selectors
const pageSize = (state: AppState) => state.users.pageSize;
const portionSize = (state: AppState) => state.users.portionSize;
//created selectors
const getPagesCount = createSelector(
    pageSize,
    (state: AppState) => state.users.totalCount,
    (totalCount, pageSize) => Math.ceil(totalCount / pageSize)
)

const getPortionCount = createSelector(
    getPagesCount,
    portionSize,
    (pagesCount, portionSize) => Math.ceil(pagesCount / portionSize)
)

export const getPagesInfo = createSelector(
    getPagesCount,
    pageSize,
    (state: AppState) => state.users.requestPage,
    getPortionCount,
    portionSize,
    (pagesCount, pageSize, requestPage, portionCount, portionSize) => {
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return {pageSize, requestPage, pages, portionCount,
        portionSize}
})