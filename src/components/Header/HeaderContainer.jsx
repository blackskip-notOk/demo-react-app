import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/Auth/AuthReducer';
import { getAuthUserId, getUserLogin } from '../../redux/Auth/AuthSelectors';
import { getIconsHeader, getAvatar } from '../../redux/Header/HeaderSelectors';
import { getProfileData } from '../../redux/Profile/ProfileReducer';
import { getIsVisible } from '../../redux/Header/HeaderSelectors';
import { toggleVisibility, getAuthUserAvatar } from '../../redux/Header/HeaderReducer';
import Header from './Header';
import { compose } from 'redux';

const HeaderContainer = (props) => {
    return <Header {...props} />
}

const mapStateToProps = (state) => {
    return {
        iconsHeader: getIconsHeader(state),
        userLogin: getUserLogin(state),
        isVisible: getIsVisible(state),
        authUserId: getAuthUserId(state),
        authUserAvatar: getAvatar(state)
    };
}

export default compose(connect(mapStateToProps, {logout,
    toggleVisibility, getAuthUserAvatar, getProfileData}))(HeaderContainer);