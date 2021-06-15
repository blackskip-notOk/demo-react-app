import { ResultCode, ResultCodeForCaptcha } from "../Enums";
import { IUser } from "./usersInterface";

export interface IStandartResponse {
    resultCode: ResultCode
    messages: string[]
    data: {}
}

export interface IGetAuth {
    data: {
        readonly id: number
        readonly email: string
        readonly login: string
    }
    resultCode: ResultCode
    messages: string[]
}

export interface ILogin {
    resultCode: ResultCode | ResultCodeForCaptcha
    messages: string[]
    data: {
        userId: number
    }
}

export interface IGetUsers {
    items: IUser[]
    totalCount: number
    error: string | null
}

export interface ISavePhoto {
    data: {
        small: string
        large: string
    }
    resultCode: ResultCode
    messages: string[]
}

export interface IGetCaptchaURL {
    url: string
}