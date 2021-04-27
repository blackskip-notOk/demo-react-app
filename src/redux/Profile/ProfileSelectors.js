export const getProfile = (state) => {
    return state.profile.profile;
}

export const getPosts = (state) => {
    return state.profile.posts;
}

export const getStatus = (state) => {
    return state.profile.status;
}

export const getIsOwner = state => {
    return state.profile.isOwner;
}

export const getIsFetching = state => {
    return state.profile.getIsFetching;
}