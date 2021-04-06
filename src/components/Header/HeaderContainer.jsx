import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/AuthReducer.js';
import { getIsAuth, getUserLogin } from '../../redux/AuthSelectors';
import { getIconsHeader, getLogo, getSearch } from '../../redux/CommonSelectors';
import { getProfile } from '../../redux/ProfilePageSelectors';
import Header from './Header';

class HeaderContainer extends Component {
    render() {
        return (
            <Header {...this.props} />
        );
    }
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