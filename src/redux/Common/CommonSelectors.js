import { createSelector } from "reselect";

export const getIconsHeader = state => state.common.iconsHeader;

export const getSearch = state => state.common.search.icon;

const getIcons = state => state.common.icons;

const getPagIcons = state => state.common.iconsPaginator;
//created selectors
export const getPhotoIcon = createSelector(getIcons, (icons) => {
    return icons.find(i => i.name === 'photo').icon;
});

export const getErrorIcon = createSelector(getIcons, (icons) => {
    return icons.find(i => i.name === 'error').icon;
});

export const getJobIcons = createSelector(getIcons, (icons) => {
    const jobIcons = icons.filter(i => i.name === 'job');
    return [jobIcons[0].icon, jobIcons[1].icon];
});

export const getPaginatorIcons = createSelector(getPagIcons, (icons) => {
    const prevPage = icons.find(i => i.name === 'left');
    const nextPage = icons.find(i => i.name === 'right');
    const paginatorIcons = {prevPage: prevPage.icon, nextPage: nextPage.icon};
    return paginatorIcons;
});