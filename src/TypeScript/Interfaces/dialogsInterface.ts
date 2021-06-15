import { DialogsActions } from './../Actions/actionsTypes';
export interface IContacts {
    id: number
    name: string
    avatar: {src: string | null, alt: string | null}
}

export interface IDialogs {
    id: number
    message: string
}

export interface IAddMessage {
    type: typeof DialogsActions.ADD_MESSAGE
    newMessageText: string
}
export interface IDeleteMessage {
    type: typeof DialogsActions.DELETE_MESSAGE
    messageId: number
}