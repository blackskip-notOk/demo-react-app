import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '22431eaf-1c01-407b-bce8-8cd8792b46d1'},
});

export const usersAPI = {
    getUsers(currentPage=1, pageSize=4) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data;
        });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
        .then(response => {
            return response.data;
        });
    },

    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
        .then(response => {
            return response.data;
        });
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId)
        .then(response => {
            return response;
        });
    }
};

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
        .then(response => {
            return response.data;
        });
    },

    setUserLogin(email, password, rememberMe) {
        return instance.post(`auth/login`, {
            email, password, rememberMe})
        .then(response => {
            return response.data;
        })
    },

    deleteUserLogin(email, password) {
        return instance.delete(`auth/login`, {
            email, password
        });
    }
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
        .then(response => {
            return response.data;
        });
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },

    updateUserStatus(status) {
        return instance.put(`profile/status`, {status})
        .then(response => {
            return response;
        });
    }
};