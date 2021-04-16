import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '22431eaf-1c01-407b-bce8-8cd8792b46d1'},
});

export const usersAPI = {
    async getUsers(currentPage=1, pageSize=4) {
        let response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },

    async unfollow(userId) {
        let response = await instance.delete(`follow/${userId}`);
        return response.data;
    },

    async follow(userId) {
        let response = await instance.post(`follow/${userId}`);
        return response.data;
    },

    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
        .then(response => {
            return response.data;
        });
    },

    // async getUserProfile(userId) {
    //     let response = await instance.get(`profile/` + userId);
    //     return response.data;
    // },

    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId)
        .then(response => {
            return response;
        });
    }
};

//     async getUserStatus(userId) {
//         let response = await instance.get(`profile/status/` + userId);
//         return response;
//     }
// };

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
        .then(response => {
            return response.data;
        });
    },

    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email,
            password, rememberMe, captcha})
        .then(response => {
            return response.data;
        })
    },

    // async getAuth() {
    //     let response = await instance.get(`auth/me`);
    //     return response.data;
    // },

    // async login(email, password, rememberMe) {
    //     let response = await instance.post(`auth/login`, {email,
    //         password, rememberMe});
    //     return response.data;
    // },

    logout() {return instance.delete(`auth/login`);}
};

export const profileAPI = {
    // async getUserProfile(userId) {
    //     let response = await instance.get(`profile/` + userId);
    //     return response.data;
    // },

    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
        .then(response => {
            return response.data;
        });
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },

    // async updateUserStatus(status) {
    //     let response = await instance.put(`profile/status`, {status});
    //     return response.data;
    // }

    updateUserStatus(status) {
        return instance.put(`profile/status`, {status})
        .then(response => {
            return response;
        });
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-TYpe': 'multipart/form-data'
            }
        })
        .then(response => {
            return response.data;
        });
    }
};

export const securityApi = {
    getCaptchaURL() {
        return instance.get(`security/get-captcha-url`)
        .then(response => {
            return response.data;
        });
    }
}