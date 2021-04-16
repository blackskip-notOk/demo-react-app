const ADD_MESSAGE = 'my-app/message/ADD-MESSAGE';
const DELETE_MESSAGE = 'my-app/message/DELETE_MESSAGE';

let initialState = {
    contacts: [
        { id: 1, name: 'Master Yoda', avatar: {src: '../image/avatars/yoda.jpg', alt: 'Master Yoda avatar'} },
    ],
    dialogs: [
        { id: 1, message: "Если вы закончите свое..." },
    ]
}

const messagesReducer = (state = initialState, action) => {
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

export default messagesReducer;