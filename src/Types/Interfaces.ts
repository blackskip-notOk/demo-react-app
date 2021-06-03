//common
export interface IPagesInfo {
    pageSize: number
    requestPage: number
    pages: Array<number>
    portionCount: number
    portionSize: number
}
export interface IPaginatorIcons {
    readonly prevPage: string
    readonly nextPage: string
}
//profile
export interface IProfile {
    readonly userId: number | null
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: IContacts
    photos?: IPhotos
}
export interface IProfileInfo {
    aboutMe: string
    jobDescription: string
    fullName: string
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export interface IPhotos {
    small: string | null
    large: string | null
}
export interface IContactIcon {
    readonly id: number
    readonly name: string
    readonly icon: string
}
export interface IContacts {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export interface IContact {
    link: string
    notation: string
    icon: string
}
export interface IPost {
    readonly id: number
    post: string
    likes: number
}
//User interface
export interface IUser {
    readonly id: number
    readonly name: string
    readonly status: string
    readonly photos: IPhotos
    followed: boolean
}