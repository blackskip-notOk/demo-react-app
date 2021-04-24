import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '22431eaf-1c01-407b-bce8-8cd8792b46d1'},
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data;});
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {return response.data;});
    },

    async follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {return response.data});
    },

    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {return response.data;});
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {return response;});
    }
};

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
        .then(response => {return response.data;});
    },

    login(email, password, rememberMe=false, captcha=null) {
        return instance.post(`auth/login`, {
            email, password, rememberMe, captcha})
            .then(response => {return response.data;});
    },

    logout() {return instance.delete(`auth/login`);}
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {return response.data;});
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },

    updateUserStatus(status) {
        return instance.put(`profile/status`, {status})
            .then(response => {return response;});
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {'Content-TYpe': 'multipart/form-data'}})
            .then(response => {return response.data;});
    }
};

export const securityApi = {
    getCaptchaURL() {
        return instance.get(`security/get-captcha-url`)
            .then(response => {return response.data;});
    }
}