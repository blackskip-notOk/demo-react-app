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
    }
};

export const securityAPI = {

};

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
        .then(response => {
            return response.data;
        });
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
        .then(response => {
            return response.data;
        });
    }
};

export const followAPI = {
    deleteFollow(id) {
        return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data;
        });
    },

    postFollow(id) {
        return instance.post(`follow/${id}`)
        .then(response => {
            return response.data;
        });
    }

};