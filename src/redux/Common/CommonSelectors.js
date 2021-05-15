const getIcon = (state, name) => {
    return state.common.icons.filter(i => i.name === name)[0].icon;
}

export const getPhotoIcon = state => {
    return getIcon(state, 'photo');
}

export const getErrorIcon = (state) => {
    return getIcon(state, 'error');
}

// export const getIcons = (state) => {
//     return state.common.icons;
// }

export const getIconsHeader = (state) => {
    return state.common.iconsHeader;
}

export const getSearch = state => state.common.search.icon;


export const getJobIcons = state => {
    const jobIcons = state.common.icons.filter(i => i.name === 'job');
    return [jobIcons[0].icon, jobIcons[1].icon];
}

export const getPaginatorIcons = state => {
    const prevPage = state.common.iconsPaginator.filter(i => i.name === 'left');
    const nextPage = state.common.iconsPaginator.filter(i => i.name === 'right');
    const paginatorIcons = {prevPage: prevPage[0].icon, nextPage: nextPage[0].icon};
    return paginatorIcons;
}