import { ADD_MESSAGE, DELETE_MESSAGE } from "../Actions/actionsTypes";

let initialState = {
    contacts: [
        { id: 1, name: 'Fake Friend', avatar: {src: null, alt: 'Master Yoda avatar'} },
    ],
    dialogs: [
        { id: 1, message: "диалоги в процессе разработки..." },
    ]
}

const dialogsReducer = (state = initialState, action) => {
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
};


export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});
export const deleteMessage = (messageId) => ({type: DELETE_MESSAGE, messageId});

export default dialogsReducer;