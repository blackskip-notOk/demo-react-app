export const getIcons = (state) => {
    return state.common.icons;
}

export const getIconsHeader = (state) => {
    return state.common.iconsHeader;
}

export const getSearch = (state) => {
    return state.common.search;
}

export const getLogo = (state) => {
    return state.common.logo;
}

export const getErrorIcon = (state) => {
    return state.common.icons.filter(i => i.name === 'error')[0].icon;
}

export const getJobIcons = state => {
    const jobIcons = state.common.icons.filter(i => i.name === 'job');
    return [jobIcons[0].icon, jobIcons[1].icon];
}
