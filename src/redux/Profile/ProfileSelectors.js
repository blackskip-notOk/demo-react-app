export const getProfile = state => state.profile.profile;

export const getPosts = state => state.profile.posts;

export const getStatus = state => state.profile.status;

export const getIsOwner = state => state.profile.isOwner;

export const getIsFetching = state => state.profile.getIsFetching;

export const getProfileAvatar = state => state.profile?.profile?.photos;

export const getContactsIcons = state => state.profile.contactsIcons;

export const getContacts = state => {
    let object = {
        github: 'git',
        vk: 'vk.com/dimych',
        facebook: 'facebook.com',
        instagram: 'instagra.com/sds',
        twitter: 'https://twitter.com/@sdf',
        website: 'www.website',
        youtube: 'youtubecanal',
        mainLink: 'mainlinkmy'
    }
    let result = [{}];

    for (const [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`);
    }

    console.log(result);
    return result;
}




