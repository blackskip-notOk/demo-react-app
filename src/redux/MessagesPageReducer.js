const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    contacts: [
        { id: 1, name: 'Master Yoda', avatar: {src: '../image/avatars/yoda.jpg', alt: 'Master Yoda avatar'} },
    ],
    dialogs: [
        { id: 1, message: "Если вы закончите свое..." },
    ]
}

const messagesPageReducer = (state = initialState, action) => {
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

        default:
            return state;
    }
};


export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default messagesPageReducer;