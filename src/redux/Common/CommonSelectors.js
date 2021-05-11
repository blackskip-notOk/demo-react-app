const getIcon = (state, name) => {
    return state.common.icons.filter(i => i.name === name)[0].icon;
}

export const getIcons = (state) => {
    return state.common.icons;
}

export const getIconsHeader = (state) => {
    return state.common.iconsHeader;
}

export const getSearch = (state) => {
    return state.common.search;
}

export const getErrorIcon = (state) => {
    return getIcon(state, 'error');
}

export const getJobIcons = state => {
    const jobIcons = state.common.icons.filter(i => i.name === 'job');
    return [jobIcons[0].icon, jobIcons[1].icon];
}

export const getPhotoIcon = state => {
    const photoIcon = state.common.icons.filter(i => i.name === 'photo');
    return photoIcon[0].icon;
}