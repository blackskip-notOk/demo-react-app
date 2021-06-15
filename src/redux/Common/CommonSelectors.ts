import { createSelector } from "reselect";
import { AppState } from "../redux-store";

export const getIconsHeader = (state: AppState) => state.common.iconsHeader;

export const getSearch = (state: AppState) => state.common.search.icon;

const getIcons = (state: AppState) => state.common.icons;
//created selectors
export const getPhotoIcon = createSelector(
    getIcons,
    icons => icons.find(i => i.name === 'photo')!.icon);

export const getErrorIcon = createSelector(
    getIcons,
    icons => icons.find(i => i.name === 'error')!.icon);

export const getJobIcons = createSelector(
    getIcons,
    icons => {
        const jobIcons = icons.filter(i => i.name === 'job');
        return [jobIcons[0].icon, jobIcons[1].icon];
    }
);

export const getPaginatorIcons = createSelector(
    (state: AppState) => state.common.iconsPaginator,
    icons => {
        const prevPage = icons.find(i => i.name === 'left');
        const nextPage = icons.find(i => i.name === 'right');
        const paginatorIcons = {prevPage: prevPage!.icon, nextPage: nextPage!.icon};
        return paginatorIcons;
    }
);