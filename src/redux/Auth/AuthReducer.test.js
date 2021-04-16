import authReducer, { setAuthUserData } from "./AuthReducer";

let state = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    emailErrorMessage: null,
    passwordErrorMessage: null,
    errorMessages: null
};

it('auth email should be correct', () => {
    let action = setAuthUserData(1, 'email@mail.com', 'testLogin', true);
    let newState = authReducer(state, action);

    expect(newState.email).toBe('email@mail.com');
});

it('auth with correct data should be correct confirmed', () => {
    let action = setAuthUserData(1, 'email@mail.com', 'testLogin', true);
    let newState = authReducer(state, action);

    expect(newState.isAuth).toBe(true);
});