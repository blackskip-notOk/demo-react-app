import { ADD_MESSAGE, DELETE_MESSAGE } from "../Actions/actionsTypes";

type ContactsType = {
    id: number
    name: string
    avatar: {src: string | null, alt: string | null}
}
type DialogsType = {
    id: number
    message: string
}
const initialState = {
    contacts: [
        { id: 1, name: 'Fake Friend', avatar: {src: null, alt: 'Master Yoda avatar'} },
    ] as Array<ContactsType>,
    dialogs: [
        { id: 1, message: "диалоги в процессе разработки..." },
    ] as Array<DialogsType>
}
export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case ADD_MESSAGE:
            let newDialog = {
                id: state.dialogs.length + 1,
                message: action.newMessageText,
            };
            return {
                ...state,
                dialogs: [...state.dialogs, newDialog]
            }

        case DELETE_MESSAGE: {
            return {
                ...state,
                dialogs: state.dialogs.filter(m => m.id !== action.messageId)
            }
        }

        default:
            return state;
    }
}

type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    newMessageText: string
}
type DeleteMessageActionType = {
    type: typeof DELETE_MESSAGE
    messageId: number
}
export const addMessage = (newMessageText: string): AddMessageActionType => ({type: ADD_MESSAGE, newMessageText});
export const deleteMessage = (messageId: number): DeleteMessageActionType => ({type: DELETE_MESSAGE, messageId});

export default dialogsReducer;