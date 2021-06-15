import { AppState } from "../redux-store";

export const getIsAuth = (state: AppState) => state.auth.isAuth;

// export const getCaptcha = (state: AppState) => state.auth.captcha;

// export const getServerErrorMessage = (state: AppState) => state.auth.errorMessage;

// export const getUserLogin = (state: AppState) => state.auth.login;

// export const getAuthUserId = (state: AppState) => state.auth.userId;

// export const getLoginInProgress = (state: AppState) => state.auth.loginInProgress;