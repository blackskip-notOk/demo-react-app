import messagesReducer, { addMessage, deleteMessage } from "./MessagesReducer";

let state = {
    contacts: [
        { id: 1, name: 'Master Yoda', avatar: {src: '../image/avatars/yoda.jpg', alt: 'Master Yoda avatar'} },
    ],
    dialogs: [
        { id: 1, message: "Если вы закончите свое..." },
    ]
}

it('dialogs length should be increment', () => {
    let action = addMessage('test message');
    let newState = messagesReducer(state, action);

    expect(newState.dialogs.length).toBe(2);
});

it('after deleted dialogs length should be decrement', () => {
    let action = deleteMessage(1);
    let newState = messagesReducer(state, action);

    expect(newState.dialogs.length).toBe(0);
});