export const getProfile = state => state.profile.profile;

export const getProfileInfo = state => {
    const aboutMe = state.profile.profile?.aboutMe;
    const jobDescription = state.profile.profile?.lookingForAJobDescription;
    const fullName = state.profile.profile?.fullName ? state.profile.profile?.fullName : '';
    const github = state.profile.profile?.contacts.github;
    //  ? state.profile.profile?.contacts.github : '';
    const vk = state.profile.profile?.contacts.vk;
    const facebook = state.profile.profile?.contacts.facebook;
    const instagram = state.profile.profile?.contacts.instagram;
    const twitter = state.profile.profile?.twitter;
    const website = state.profile.profile?.website;
    const youtube = state.profile.profile?.youtube;
    const mainLink = state.profile.profile?.mainLink;
    const profileInfo = {aboutMe, jobDescription, fullName, github, vk,
        facebook, instagram, twitter, website, youtube, mainLink};
    return profileInfo;
}

export const getPosts = state => state.profile.posts;

export const getStatus = state => state.profile.status;

export const getIsOwner = state => state.profile.isOwner;

export const getIsFetching = state => state.profile.isFetching;

export const getProfileAvatar = state => state.profile?.profile?.photos;

export const getContactsIcons = state => state.profile.contactsIcons;

export const getisProfileUpdate = state => state.profile.isProfileUpdate;

export const getServerErrorMessage = state => state.profile.errorMessage;

export const getIsSettingsMode = state => state.profile.isSettingsMode;


