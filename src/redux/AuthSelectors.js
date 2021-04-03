export const getIsAuth = (state) => {
    return state.auth.isAuth;
}

export const getEmailErrorMessage = (state) => {
    return state.auth.emailErrorMessage;
}

export const getPasswordErrorMessage = (state) => {
    return state.auth.passwordErrorMessage;
}

export const getErrorMessages = (state) => {
    return state.auth.errorMessages;
}

export const getUserLogin = (state) => {
    return state.auth.login;
}

export const getAuthUserId = (state) => {
    return state.auth.userId;
}