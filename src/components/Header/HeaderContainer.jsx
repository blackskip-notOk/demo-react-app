import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/Auth/AuthReducer';
import { getIsAuth, getUserLogin } from '../../redux/Auth/AuthSelectors';
import { getIconsHeader, getSearch } from '../../redux/Common/CommonSelectors';
import { getIsVisible } from '../../redux/Header/HeaderSelectors';
import { getProfile } from '../../redux/Profile/ProfileSelectors';
import { toggleVisibility } from '../../redux/Header/HeaderReducer';
import Header from './Header';

const HeaderContainer = (props) => {
    return <Header {...props} />
}

const mapStateToProps = (state) => {
    return {
        iconsHeader: getIconsHeader(state),
        search: getSearch(state),
        isAuth: getIsAuth(state),
        profile: getProfile(state),
        userLogin: getUserLogin(state),
        isVisible: getIsVisible(state)
    };
}

export default connect(mapStateToProps, {login, logout,
    toggleVisibility})(HeaderContainer);