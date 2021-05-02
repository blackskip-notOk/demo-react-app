import { profileAPI } from '../../API/API';
import { TOGGLE_IS_VISIBLE, SET_AUTH_USER_AVATAR } from '../Actions/actionsTypes';

const initialState = {
    iconsHeader: [
        // { id: 1, pathway: `/profile`, icon: 'fas fa-user-circle', undertext: 'profile', target: '_self' },
        { id: 2, pathway: '/friends', icon: 'fas fa-users', undertext: 'friends', target: '_self' },
        { id: 3, pathway: '/dialogs', icon: 'fas fa-comment', undertext: 'dialogs', target: '_self' },
    ],
    isVisible: false,
    authUserId: null,
    authUserAvatar: {}
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_VISIBLE:
            return {
                ...state,
                isVisible: action.isVisible
            };
        case SET_AUTH_USER_AVATAR:
            return {
                ...state,
                authUserAvatar: action.authUserAvatar
            }
        default: return state;
    }
}
//action creator
export const toggleVisibility = (isVisible) => ({
        type: TOGGLE_IS_VISIBLE, isVisible});
export const setAuthUserAvatar = authUserAvatar => ({
    type: SET_AUTH_USER_AVATAR, authUserAvatar});
//thunk creator
export const getAuthUserAvatar = authUserId => async (dispatch) => {
    const response = await profileAPI.getUserProfile(authUserId);
    dispatch(setAuthUserAvatar(response.photos));}

export default headerReducer;