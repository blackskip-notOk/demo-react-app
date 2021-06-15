import { DialogsActionsTypes } from './../../TypeScript/Types';
import { IAddMessage, IContacts, IDeleteMessage, IDialogs } from "../../TypeScript/Interfaces/dialogsInterface";
import { DialogsActions } from '../../TypeScript/Actions/actionsTypes';

const initialState = {
    contacts: [
        { id: 1, name: 'Fake Friend', avatar: {src: null, alt: 'Master Yoda avatar'} },
    ] as IContacts[],
    dialogs: [
        { id: 1, message: "диалоги в процессе разработки..." },
    ] as IDialogs[]
}
export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: DialogsActionsTypes): InitialStateType => {
    switch(action.type) {
        case DialogsActions.ADD_MESSAGE:
            let newDialog = {
                id: state.dialogs.length + 1,
                message: action.newMessageText,
            };
            return {
                ...state,
                dialogs: [...state.dialogs, newDialog]
            }

        case DialogsActions.DELETE_MESSAGE: {
            return {
                ...state,
                dialogs: state.dialogs.filter(m => m.id !== action.messageId)
            }
        }

        default:
            return state;
    }
}

export const addMessage = (newMessageText: string): IAddMessage => ({type: DialogsActions.ADD_MESSAGE, newMessageText});
export const deleteMessage = (messageId: number): IDeleteMessage => ({type: DialogsActions.DELETE_MESSAGE, messageId});

export default dialogsReducer;