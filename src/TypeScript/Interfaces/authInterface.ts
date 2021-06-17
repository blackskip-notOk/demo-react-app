import { AuthActions } from "../Actions/actionsTypes";

export interface IToggleLoginProgress {
    readonly type: typeof AuthActions.TOGGLE_LOGIN_PROGRESS
    loginInProgress: boolean
};

export interface ISetAuthUserDataActionPayload {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
};

export interface ISetAuthUserData {
    readonly type: typeof AuthActions.SET_USER_DATA
    payload: ISetAuthUserDataActionPayload
};

export interface ISetErrormessage {
    readonly type: typeof AuthActions.SET_ERROR_MESSAGE
    messages: string[]
};

export interface IGetCaptchaUrlSuccess {
    readonly type: typeof AuthActions.GET_CAPTCHA_URL_SUCCESS
    payload: { captcha: string }
};

export interface ILoginData {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}