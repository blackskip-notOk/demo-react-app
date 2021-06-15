import axios from "axios";
import { IGetAuth, IGetCaptchaURL, IGetUsers, ILogin, ISavePhoto, IStandartResponse } from '../TypeScript/Interfaces/apiInterface';
import { IContact, IProfile } from "../TypeScript/Interfaces/profileInterface";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '22431eaf-1c01-407b-bce8-8cd8792b46d1'},
});

//Auth API
export const authAPI = {
    getAuth() {
        return instance.get<IGetAuth>(`auth/me`)
        .then(response => response.data);
    },

    async login(email: string, password: string, rememberMe=false, captcha: null | string = null) {
        const response = await instance.post<ILogin>(`auth/login`, {
            email, password, rememberMe, captcha});
        return response.data;
    },

    async logout() {
        const response = await instance.delete<IStandartResponse>('auth/login');
        return response.data;
    }
};

//Profile API
export const profileAPI = {
    getUserProfile(userId: number | null) {
        return instance.get<IProfile>(`profile/${userId}`)
            .then(response => response.data);
    },

    getUserStatus(userId: number | null) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data);
    },

    updateUserStatus(status: string) {
        return instance.put<IStandartResponse>(`profile/status`, {status})
            .then(response => response.data);
    },

    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile);

        return instance.put<ISavePhoto>(`profile/photo`, formData, {
            headers: {'Content-TYpe': 'multipart/form-data'}})
            .then(response => response.data);
    },
    updateProfileProperties(userId: number | null, aboutMe: string,
        lookingForAJob: boolean, lookingForAJobDescription: string,
        fullName: string, contacts: IContact) {
        return instance.put<IStandartResponse>('profile', {
            userId, aboutMe, lookingForAJob, lookingForAJobDescription,
            fullName, contacts})
            .then(response => response.data);
    }
};

//Users API
export const usersAPI = {
    async getUsers(requestPage: number, pageSize: number) {
        const response = await instance.get<IGetUsers>(`users?page=${requestPage}&count=${pageSize}`);
        return response.data;
    },

    unfollow(userId: number) {
        return instance.delete<IStandartResponse>(`follow/${userId}`)
            .then(response => response.data);
    },

    async follow(userId: number) {
        return instance.post<IStandartResponse>(`follow/${userId}`)
            .then(response => response.data);
    },

    async getUserProfile(userId: number) {
        const response = await instance.get(`profile/${userId}`);
        return response.data;
    },

    async getUserStatus(userId: number) {
        const response =  await instance.get<boolean>(`profile/status/${userId}`);
        return response;
    }
};

//Security API
export const securityApi = {
    getCaptchaURL() {
        return instance.get<IGetCaptchaURL>('security/get-captcha-url')
            .then(response => response.data);
    }
}