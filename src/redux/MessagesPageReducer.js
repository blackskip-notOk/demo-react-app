const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    contacts: [
        { id: 1, name: 'Master Yoda', avatar: {src: '../image/avatars/yoda.jpg', alt: 'Master Yoda avatar'} },
    ],
    dialogs: [
        { id: 1, message: "Если вы закончите свое..." },
    ],
    newMessageText: 'Размер не имеет значения...',
}

const messagesPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            let newDialog = {
                id: state.dialogs.length + 1,
                message: state.newMessageText,
            };
            state.dialogs.push(newDialog);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
};


export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => (
    {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
);

export default messagesPageReducer;