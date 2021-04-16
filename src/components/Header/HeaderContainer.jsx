import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/Auth/AuthReducer';
import { getIsAuth, getUserLogin } from '../../redux/Auth/AuthSelectors';
import { getIconsHeader, getLogo, getSearch } from '../../redux/Common/CommonSelectors';
import { getProfile } from '../../redux/Profile/ProfileSelectors';
import Header from './Header';

const HeaderContainer = (props) => {
    return <Header {...props} />
}

const mapStateToProps = (state) => {
    return {
        iconsHeader: getIconsHeader(state),
        search: getSearch(state),
        logo: getLogo(state),
        isAuth: getIsAuth(state),
        profile: getProfile(state),
        userLogin: getUserLogin(state)
    };
}

export default connect(mapStateToProps, {login, logout})(HeaderContainer);