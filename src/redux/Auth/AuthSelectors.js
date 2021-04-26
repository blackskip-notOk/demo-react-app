export const getIsAuth = (state) => {
    return state.auth.isAuth;
}

export const getCaptcha = (state) => {
    return state.auth.captcha;
}

export const getServerErrorMessage = (state) => {
    return state.auth.errorMessage;
}

export const getUserLogin = (state) => {
    return state.auth.login;
}

export const getAuthUserId = (state) => {
    return state.auth.userId;
}

export const getLoginInProgress = state => {
    return state.auth.loginInProgress;
}