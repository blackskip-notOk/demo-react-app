import { AppState } from './../redux-store'

export const getProfile = (state: AppState) => state.profile.profile;

export const getProfileInfo = (state: AppState) => {
    const aboutMe = state.profile.profile?.aboutMe;
    const jobDescription = state.profile.profile?.lookingForAJobDescription;
    const fullName = state.profile.profile?.fullName ? state.profile.profile?.fullName : '';
    const github = state.profile.profile?.contacts.github;
    //  ? state.profile.profile?.contacts.github : '';
    const vk = state.profile.profile?.contacts.vk;
    const facebook = state.profile.profile?.contacts.facebook;
    const instagram = state.profile.profile?.contacts.instagram;
    const twitter = state.profile.profile?.contacts.twitter;
    const website = state.profile.profile?.contacts.website;
    const youtube = state.profile.profile?.contacts.youtube;
    const mainLink = state.profile.profile?.contacts.mainLink;
    const profileInfo = {aboutMe, jobDescription, fullName, github, vk,
        facebook, instagram, twitter, website, youtube, mainLink};
    return profileInfo;
}

// export const getPosts = (state: AppState) => state.profile.posts;

// export const getStatus = (state: AppState) => state.profile.status;

// export const getIsOwner = (state: AppState) => state.profile.isOwner;

// export const getIsFetching = (state: AppState) => state.profile.isFetching;

export const getProfileAvatar = (state: AppState) => state.profile.profile?.photos;

// export const getContactsIcons = (state: AppState) => state.profile.contactsIcons;

export const getisProfileUpdate = (state: AppState) => state.profile.isProfileUpdate;

// export const getServerErrorMessage = (state: AppState) => state.profile.errorMessage;

export const getIsSettingsMode = (state: AppState) => state.profile.isSettingsMode